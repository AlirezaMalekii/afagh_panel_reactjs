import { useRouter } from "next/router";
import React from "react";
import { Checkbox, Loader, Toggle } from "rsuite";
import Main from "../../../components/layout/main";
import Form from "../../../components/solvers/form";

export default function CourseCreate({ solve, Page }) {
    const router = useRouter();
    const [data, setData] = React.useState(null);
    const [op, setOp] = React.useState({});
    const [onlineMeetingData, setOnlineMeetingData] = React.useState(null);
    
    const [toggle, setToggle] = React.useState(false);
	const [page, setPage] = React.useState(router.query?.page ?? null);
    const [state, setState] = React.useState({
        step0: data?.cu?.type ?? "cash",
        step2: "free",
    });

    React.useEffect(() => {
        page !== router.query?.page &&
            router.query?.page &&
            setPage(router.query?.page);
    }, [router.query]);
    React.useEffect(() => {
		// if (state === null || page) {
			solve.Request({
				config: {
					url: `online-class/meetings?${`page=${page ?? 1}`}`,
					// pointer: "course",
					method: "get",
					paginate: true,
				},
				dependencies: {
					data: [onlineMeetingData, setOnlineMeetingData],
				},
			}).then(res => console.log(res.data.data));
		// }
	}, []);

    React.useEffect(() => {
        if (solve.Router.query.get("id") && !data) {
            const id = solve.Router.query.get("id");
            solve.Request({
                config: {
                    url: `courses/${id}`,
                    pointer: "cu",
                    method: "get",
                },
                dependencies: {
                    callback: (e) => {
                        let temp = { cu: e?.data?.data };
                        solve.Request({
                            config: {
                                url: "all-users-without-paginate",
                                pointer: "pg",
                                method: "get",
                            },
                            dependencies: {
                                callback: (e) => {
                                    let temp2 = { pg: e?.data?.data };
                                    solve.Request({
                                        config: {
                                            url: `get-course-members/${id}`,
                                            pointer: "mems",
                                            method: "get",
                                        },
                                        dependencies: {
                                            callback: (e) => {
                                                let temp3 = { mems: e?.data?.data };
                                                solve.Request({
                                                    config: {
                                                        url: "classrooms",
                                                        pointer: "cls",
                                                        method: "get",
                                                    },
                                                    dependencies: {
                                                        callback: (e) => {
                                                            let temp4 = { cls: e?.data?.data };
                                                            solve.Request({
                                                                config: {
                                                                    url: "all-orgs-without-paginate",
                                                                    pointer: "orgs",
                                                                },
                                                                dependencies: {
                                                                    callback: (e) => {
                                                                        let temp5 = { orgs: e?.data?.data };
                                                                        solve.Request({
                                                                            config: {
                                                                                url: "categories",
                                                                                pointer: "cat",
                                                                            },
                                                                            dependencies: {
                                                                                callback: (e) => {
                                                                                    let temp6 = { cat: e?.data?.data };
                                                                                    setData({
                                                                                        ...temp,
                                                                                        ...temp2,
                                                                                        ...temp3,
                                                                                        ...temp4,
                                                                                        ...temp5,
                                                                                        ...temp6,
                                                                                    });
                                                                                },
                                                                            },
                                                                        });
                                                                    },
                                                                },
                                                            });
                                                        },
                                                    },
                                                });
                                            },
                                        },
                                    });
                                },
                            },
                        });
                    },
                },
            });
        }
        // console.log("edit.js data",data);

    }, [data, solve]);
    const { classrooms, organizations, sections, categories, title, id } =
        data?.cu ?? {};

    return (
        <Main
            solve={solve}
            header={{
                title: (
                    <span
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        ???????????? ????????
                        <small style={{ marginRight: ".5rem" }}>/</small>
                        <span style={{ marginRight: ".5rem", display: "flex" }}>
                            {solve.Convert.withBadge({
                                val: solve.Convert.toPe(title),
                                color: "violet",
                            })}
                        </span>
                    </span>
                ),
            }}
            content={
                data
                    ? {
                        step0: {
                            label: "????????????",
                            btn: {
                                action: "back",
                            },
                            form: {
                                config: {
                                    url: `courses/${router.query?.id}?_method=PUT`,
                                    content_type: "multipart/form-data",
                                    route: true,
                                    push_notif: true,
                                    initial: {
                                        title: data.cu.title,
                                        description: data.cu.description,
                                        price: data.cu.price,
                                        type: data.cu.type,
                                        time: data.cu.time,
                                        body: data.cu.body,
                                    },
                                },
                                structure: [
                                    [
                                        {
                                            input: {
                                                name: "title",
                                                type: "text",
                                                placeholder: "?????? ????????",
                                            },
                                            flex: 0.5,
                                        },
                                        {
                                            input: {
                                                name: "description",
                                                placeholder: "?????????? ??????????",
                                                addon: {
                                                    last: {
                                                        prompt: "SP-counter-150",
                                                    },
                                                },
                                            },
                                        },
                                    ],
                                    [
                                        {
                                            select: {
                                                placeholder: "??????",
                                                data: [
                                                    { title: "????????", value: "cash" },
                                                    { title: "????????????", value: "free" },
                                                ],
                                                args: {
                                                    defaultValue: data.cu.type,
                                                },
                                                name: "type",
                                                callback: (e) => {
                                                    state !== e.val &&
                                                        setState({ ...state, step0: e.val });
                                                },
                                            },
                                        },
                                        {
                                            input: {
                                                type: "price",
                                                name: "price",
                                                direction: "ltr",
                                                placeholder: "??",
                                                addon: {
                                                    first: {
                                                        prompt: "????????",
                                                    },
                                                    last: {
                                                        prompt: "??????????",
                                                    },
                                                },
                                                disabled: state?.step0 !== "cash",
                                            },
                                        },
                                        {
                                            input: {
                                                // type: 'time',

                                                name: "time",
                                                addon: {
                                                    first: {
                                                        prompt: "?????? ????????",
                                                    },
                                                    last: {
                                                        prompt: "??:??:??",
                                                    },
                                                },
                                                masked: true,
                                                showMask: true,
                                                guide: true,
                                                placeholderChar: "??",
                                                mask: [
                                                    /[\u06F0-\u06F90-9]/,
                                                    /[\u06F0-\u06F90-9]/,
                                                    ":",
                                                    /[\u06F0-\u06F90-9]/,
                                                    /[\u06F0-\u06F90-9]/,
                                                    ":",
                                                    /[\u06F0-\u06F90-9]/,
                                                    /[\u06F0-\u06F90-9]/,
                                                ],
                                                keepCharPositions: true,
                                                direction: "ltr",
                                            },
                                        },
                                    ],
                                    [
                                        {
                                            upload: {
                                                prompt: "?????????? ???????? ???? ???????????? ????????",
                                                name: "image",
                                            },
                                        },
                                    ],
                                    [
                                        {
                                            input: {
                                                type: "textarea",
                                                placeholder: "?????????????? ????????????",
                                                name: "body",
                                            },
                                        },
                                    ],
                                ],
                            },
                        },
                        step1: {
                            label: "???????? ????????",
                            btn: {
                                action: "back",
                            },
                            form: {
                                config: {
                                    url: "add-course-to-category",
                                    initial: {
                                        course_id: +router.query?.id,
                                    },
                                    // content_type: 'multipart/form-data'
                                },
                                structure: [
                                    [
                                        {
                                            select: {
                                                name: "category_ids",
                                                data: data?.cat,
                                                multi: true,
                                                placeholder: "???????????? ???????? ???????? ????",
                                                args: {
                                                    defaultValue: Array.isArray(data?.cat)
                                                        ? data?.cat?.map((val) => val?.id)
                                                        : null,
                                                },
                                            },
                                        },
                                    ],
                                ],
                            },
                        },
                        step2: {
                            label: "????????????????",
                            btn: {
                                action: "back",
                            },
                            view: {
                                structure: {
                                    tabs: {
                                        data: [
                                            {
                                                label: "????????????",
                                                cta: {
                                                    prompt: "???????????? ??????????",
                                                    modal: {
                                                        header: `???????????? ???????? ???? ??????????`,
                                                        body: (
                                                            <Form
                                                                config={{
                                                                    url: "add-course-to-organization",
                                                                    initial: {
                                                                        course_id: id + "",
                                                                        organization_id: "",
                                                                    },
                                                                    callback: () => router.reload(),
                                                                }}
                                                                structure={[
                                                                    [
                                                                        {
                                                                            select: {
                                                                                name: "organization_id",
                                                                                placeholder: "???????????? ??????????",
                                                                                data: data?.orgs,
                                                                                searchable: true,
                                                                            },
                                                                        },
                                                                    ],
                                                                ]}
                                                            />
                                                        ),
                                                    },
                                                },
                                                content: {
                                                    view: {
                                                        config: {},
                                                        structure: {
                                                            table: {
                                                                data: organizations,
                                                                columns: [
                                                                    { title: "#", type: "id" },
                                                                    {
                                                                        title: "????????",
                                                                        type: "logo",
                                                                        key: "logo_img",
                                                                    },
                                                                    {
                                                                        title: "?????? ??????????",
                                                                        type: "title",
                                                                        align: "right",
                                                                    },
                                                                    {
                                                                        title: "????????",
                                                                        type: "manager",
                                                                        key: "manager",
                                                                    },
                                                                    {
                                                                        title: "???????????? ????",
                                                                        type: "actions",
                                                                        actions: [
                                                                            {
                                                                                key: "delete",
                                                                                url: "detach-course-from-organization",
                                                                                method: "post",
                                                                            },
                                                                        ],
                                                                    },
                                                                ],
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                            {
                                                label: "???????? ????",
                                                cta: {
                                                    prompt: "???????????? ????????",
                                                    modal: {
                                                        header: `???????????? ???????? ???? ????????`,
                                                        body: (
                                                            <Form
                                                                config={{
                                                                    url: "add-classroom-to-course",
                                                                    initial: {
                                                                        course_id: id + "",
                                                                        type: "free",
                                                                        price: "0",
                                                                    },
                                                                    callback: () => router.reload(),
                                                                }}
                                                                structure={[
                                                                    [
                                                                        {
                                                                            select: {
                                                                                name: "classroom_id",
                                                                                placeholder: "???????????? ????????",
                                                                                data: data?.cls,
                                                                                searchable: true,
                                                                            },
                                                                        },
                                                                    ],
                                                                    [
                                                                        {
                                                                            select: {
                                                                                name: "type",
                                                                                placeholder: "??????",
                                                                                value: "free",
                                                                                data: [
                                                                                    { title: "????????", value: "cash" },
                                                                                    { title: "????????????", value: "free" },
                                                                                ],
                                                                            },
                                                                        },
                                                                        {
                                                                            input: {
                                                                                name: "price",
                                                                                type: "price",
                                                                                placeholder: "??",
                                                                                direction: "ltr",
                                                                                disabled: state?.step2 === "free",
                                                                                addon: {
                                                                                    first: {
                                                                                        prompt: "????????",
                                                                                    },
                                                                                    last: {
                                                                                        prompt: "??????????",
                                                                                    },
                                                                                },
                                                                            },
                                                                        },
                                                                    ],
                                                                ]}
                                                            />
                                                        ),
                                                    },
                                                },
                                                content: {
                                                    view: {
                                                        config: {},
                                                        structure: {
                                                            accord: {
                                                                entries: classrooms ?? [],
                                                                ctas: [
                                                                    {
                                                                        prompt: "?????? ???????? ???? ????????",
                                                                        color: "red",
                                                                        onClick: (e) => {
                                                                            setToggle(false);
                                                                            solve.Page.modal({
                                                                                header: "??????",
                                                                                body: (
                                                                                    <div>
                                                                                        {`?????? ???????? ???? ?????? ???????? '${e?.title}' ???? ???????? '${data.cu.title}' ?????????? ????????????`}
                                                                                        <div>
                                                                                            {toggle !== null &&
                                                                                                solve.Convert.withBadge({
                                                                                                    val: (
                                                                                                        <label>
                                                                                                            ?????? ?????????? ?????????????? ????????
                                                                                                            ???? ????????
                                                                                                        </label>
                                                                                                    ),
                                                                                                    color: "red",
                                                                                                })}{" "}
                                                                                            <Checkbox
                                                                                                onChange={(e, a) =>
                                                                                                    setToggle({
                                                                                                        ...toggle,
                                                                                                        cls: a,
                                                                                                    })
                                                                                                }
                                                                                            />
                                                                                        </div>
                                                                                    </div>
                                                                                ),
                                                                                footer: [
                                                                                    {
                                                                                        prompt: "??????",
                                                                                        color: "red",
                                                                                        state: op?.clsDelete ?? "init",
                                                                                        handleClick: () => {
                                                                                            setOp({
                                                                                                ...op,
                                                                                                clsDelete: "loading",
                                                                                            });
                                                                                            solve.Request({
                                                                                                config: {
                                                                                                    url: "detach-classroom-from-course",
                                                                                                    method: "post",
                                                                                                    req_data: {
                                                                                                        course_id: data.cu.id,
                                                                                                        classroom_id: e?.id,
                                                                                                        delete_all_class_members_from_course:
                                                                                                            toggle?.cls ?? false,
                                                                                                    },
                                                                                                    push_notif: true,
                                                                                                },
                                                                                                dependencies: {
                                                                                                    callback: (e) => {
                                                                                                        setOp({
                                                                                                            ...op,
                                                                                                            orgDelete: "success",
                                                                                                        });
                                                                                                        router.reload();
                                                                                                    },
                                                                                                },
                                                                                            });
                                                                                        },
                                                                                    },
                                                                                ],
                                                                            });
                                                                        },
                                                                    },
                                                                ],
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                            {
                                                label: "??????????????",
                                                cta: {
                                                    prompt: "???????????? ??????????",
                                                    modal: {
                                                        header: `???????????? ?????????? ???? ????????`,
                                                        body: (
                                                            <Form
                                                                config={{
                                                                    url: "add-user-to-course-member",
                                                                    initial: {
                                                                        course_id: id + "",

                                                                    },
                                                                    callback: () => {

                                                                        return router.reload();
                                                                    },

                                                                }}

                                                                structure={[
                                                                    [
                                                                        {
                                                                            select: {
                                                                                name: "user_id",
                                                                                placeholder: "???????????? ??????????",
                                                                                data: data?.pg,
                                                                                searchable: true,
                                                                            },
                                                                        },
                                                                    ],
                                                                ]}
                                                            />
                                                        ),
                                                    },
                                                },
                                                content: {
                                                    view: {
                                                        config: {},
                                                        structure: {
                                                            table: {
                                                                data: data?.mems ?? [],
                                                                autoHeight: null,
                                                                fillHeight: null,
                                                                columns: [
                                                                    { title: "#", type: "id", key: "user_id" },
                                                                    {
                                                                        title: "?????? ?? ?????? ?? ????????????????",
                                                                        type: "title",
                                                                        key: "name",
                                                                        align: "right",
                                                                    },
                                                                    {
                                                                        title: "?????????? ????????",
                                                                        type: "phone",
                                                                        key: "phone",
                                                                    },
                                                                    {
                                                                        title: "???????????? ????",
                                                                        type: "actions",
                                                                        actions: [
                                                                            {
                                                                                key: "delete",
                                                                                url: "delete-course-user",
                                                                                method: "post",
                                                                            },
                                                                        ],
                                                                    },
                                                                ],
                                                            },
                                                        },
                                                    },
                                                },
                                            },
                                        ],
                                    },
                                },
                            },
                        },
                        step3: {
                            label: "?????????? ????",
                            btn: {
                                action: "back",
                            },
                            sections: {
                                data,
                            },
                        },
                        // step4: {
                        //     isCustom:true,
                        //     label: "???????? ????????????",
                        //     btn: {
                        //         action: "back",
                        //     },
                        //     // search: true,
                        //     view: {
                        //         config: {
                        //             paginate: {
                        //                 total: onlineMeetingData?.paginate?.total,
                        //                 limit: onlineMeetingData?.paginate?.per_page,
                        //                 activePage: onlineMeetingData?.paginate?.current_page,
                        //             },
                        //         },
                        //         structure: {
                        //             table: {
                        //                 data: Array.from(onlineMeetingData?.data ?? {}),
                        //                 loading: onlineMeetingData?.data ? false : true,
                        //                 course_id:data.cu.id,
                        //                 fillHeight: true,
                        //                 columns: [
                        //                     { title: "#", type: "id" },
                        //                     { title: "?????????? ????????", type: "title", align: "right" },
                        //                     { title: "?????????? ??????????", key: "created_at", type: "date" },
                        //                     { title: "??????", type: "record" },
                        //                     { title: "???????? ?????? ????????????????", type: "start_auto_record" },
                        //                     { title: "??????????", type: "guest" },
                        //                     { title: "??????????", type: "status" },
                        //                     {
                        //                         title: "???????????? ????",
                        //                         type: "actions",
                        //                         actions: [
                        //                             { key: "edit" },
                        //                             { key: "delete", url: "courses" },
                        //                         ],
                        //                     },
                        //                 ],
                        //             },
                        //         },
                        //     },
                        // }
                    }
                    : { loader: {} }
            }
        />
    );
}
