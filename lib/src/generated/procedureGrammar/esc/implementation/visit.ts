import * as pr from "pareto-lang-lib"
import * as api from "../../interface/types/ts_api"
import * as foox from "../../interface/interfaces/visitor"

export function visit<Annotation>(
    $: api.TNroot<Annotation>,
    foo: foox.IVisitor<Annotation>,
): void {
    function X_block(
        $: api.TGblock<Annotation>,
    ) {
        ((
            $: api.TNGblock$<Annotation>,
        ) => {
            if (foo["$block/*Block"] !== undefined) { foo["$block/*Block"].begin($) }
            pr.cc($.content, ($) => {
                pr.cc($["variables"], ($) => {
                    $.forEach(($) => {
                        ((
                            $: api.TNGblock$_variables$<Annotation>,
                        ) => {
                            if (foo["$block/*Block/.variables/*VariableStatement"] !== undefined) { foo["$block/*Block/.variables/*VariableStatement"].begin($) }
                            pr.cc($.content, ($) => {
                                ((
                                    $: api.TNGblock$_variables$$<Annotation>,
                                ) => {
                                    if (foo["$block/*Block/.variables/*VariableStatement/*VariableDeclarationList"] !== undefined) { foo["$block/*Block/.variables/*VariableStatement/*VariableDeclarationList"].begin($) }
                                    pr.cc($.content, ($) => {
                                        ((
                                            $: api.TNGblock$_variables$$$<Annotation>,
                                        ) => {
                                            if (foo["$block/*Block/.variables/*VariableStatement/*VariableDeclarationList/*VariableDeclaration"] !== undefined) { foo["$block/*Block/.variables/*VariableStatement/*VariableDeclarationList/*VariableDeclaration"].begin($) }
                                            pr.cc($.content, ($) => {
                                                pr.cc($["name"], ($) => {
                                                    X_identifier($)
                                                })
                                                pr.cc($["type"], ($) => {
                                                    if ($ === null) {
                                                        //FIXME??
                                                    } else {
                                                        X_type($)
                                                    }
                                                })
                                                pr.cc($["initialization"], ($) => {
                                                    X_initialization($)
                                                })
                                            })
                                            if (foo["$block/*Block/.variables/*VariableStatement/*VariableDeclarationList/*VariableDeclaration"] !== undefined) { foo["$block/*Block/.variables/*VariableStatement/*VariableDeclarationList/*VariableDeclaration"].end($) }
                                        })($)
                                    })
                                    if (foo["$block/*Block/.variables/*VariableStatement/*VariableDeclarationList"] !== undefined) { foo["$block/*Block/.variables/*VariableStatement/*VariableDeclarationList"].end($) }
                                })($)
                            })
                            if (foo["$block/*Block/.variables/*VariableStatement"] !== undefined) { foo["$block/*Block/.variables/*VariableStatement"].end($) }
                        })($)
                    })
                })
                pr.cc($["nestedProcedures"], ($) => {
                    $.forEach(($) => {
                        ((
                            $: api.TNGblock$_nestedProcedures$<Annotation>,
                        ) => {
                            if (foo["$block/*Block/.nestedProcedures/*FunctionDeclaration"] !== undefined) { foo["$block/*Block/.nestedProcedures/*FunctionDeclaration"].begin($) }
                            pr.cc($.content, ($) => {
                                pr.cc($["name"], ($) => {
                                    X_identifier($)
                                })
                                pr.cc($["parameters"], ($) => {
                                    X_parameterTriplet($)
                                })
                                pr.cc($["void"], ($) => {
                                    ((
                                        $: api.TNGblock$_nestedProcedures$_void$<Annotation>,
                                    ) => {
                                        if (foo["$block/*Block/.nestedProcedures/*FunctionDeclaration/.void/*VoidKeyword"] !== undefined) { foo["$block/*Block/.nestedProcedures/*FunctionDeclaration/.void/*VoidKeyword"]($) }
                                    })($)
                                })
                                pr.cc($["block"], ($) => {
                                    X_block($)
                                })
                            })
                            if (foo["$block/*Block/.nestedProcedures/*FunctionDeclaration"] !== undefined) { foo["$block/*Block/.nestedProcedures/*FunctionDeclaration"].end($) }
                        })($)
                    })
                })
                pr.cc($["statements"], ($) => {
                    $.forEach(($) => {
                        switch ($[0]) {
                            case "expressionStatement": {
                                pr.cc($[1], ($) => {
                                    ((
                                        $: api.TNGblock$_statements_expressionStatement$<Annotation>,
                                    ) => {
                                        if (foo["$block/*Block/.statements/?expressionStatement/*ExpressionStatement"] !== undefined) { foo["$block/*Block/.statements/?expressionStatement/*ExpressionStatement"].begin($) }
                                        pr.cc($.content, ($) => {
                                            switch ($[0]) {
                                                case "binaryExpression": {
                                                    pr.cc($[1], ($) => {
                                                        ((
                                                            $: api.TNGblock$_statements_expressionStatement$_binaryExpression$<Annotation>,
                                                        ) => {
                                                            if (foo["$block/*Block/.statements/?expressionStatement/*ExpressionStatement/?binaryExpression/*BinaryExpression"] !== undefined) { foo["$block/*Block/.statements/?expressionStatement/*ExpressionStatement/?binaryExpression/*BinaryExpression"].begin($) }
                                                            pr.cc($.content, ($) => {
                                                                pr.cc($["referencedVariable"], ($) => {
                                                                    X_identifier($)
                                                                })
                                                                pr.cc($["operator"], ($) => {
                                                                    switch ($[0]) {
                                                                        case "equalsToken": {
                                                                            pr.cc($[1], ($) => {
                                                                                ((
                                                                                    $: api.TNGblock$_statements_expressionStatement$_binaryExpression$_operator_equalsToken$<Annotation>,
                                                                                ) => {
                                                                                    if (foo["$block/*Block/.statements/?expressionStatement/*ExpressionStatement/?binaryExpression/*BinaryExpression/.operator/?equalsToken/*EqualsToken"] !== undefined) { foo["$block/*Block/.statements/?expressionStatement/*ExpressionStatement/?binaryExpression/*BinaryExpression/.operator/?equalsToken/*EqualsToken"]($) }
                                                                                })($)
                                                                            })
                                                                            break
                                                                        }
                                                                        case "plusEqualsToken": {
                                                                            pr.cc($[1], ($) => {
                                                                                ((
                                                                                    $: api.TNGblock$_statements_expressionStatement$_binaryExpression$_operator_plusEqualsToken$<Annotation>,
                                                                                ) => {
                                                                                    if (foo["$block/*Block/.statements/?expressionStatement/*ExpressionStatement/?binaryExpression/*BinaryExpression/.operator/?plusEqualsToken/*PlusEqualsToken"] !== undefined) { foo["$block/*Block/.statements/?expressionStatement/*ExpressionStatement/?binaryExpression/*BinaryExpression/.operator/?plusEqualsToken/*PlusEqualsToken"]($) }
                                                                                })($)
                                                                            })
                                                                            break
                                                                        }
                                                                        default: pr.au($[0])
                                                                    }
                                                                })
                                                                pr.cc($["initializer"], ($) => {
                                                                    X_initialization($)
                                                                })
                                                            })
                                                            if (foo["$block/*Block/.statements/?expressionStatement/*ExpressionStatement/?binaryExpression/*BinaryExpression"] !== undefined) { foo["$block/*Block/.statements/?expressionStatement/*ExpressionStatement/?binaryExpression/*BinaryExpression"].end($) }
                                                        })($)
                                                    })
                                                    break
                                                }
                                                case "call": {
                                                    pr.cc($[1], ($) => {
                                                        ((
                                                            $: api.TNGblock$_statements_expressionStatement$_call$<Annotation>,
                                                        ) => {
                                                            if (foo["$block/*Block/.statements/?expressionStatement/*ExpressionStatement/?call/*CallExpression"] !== undefined) { foo["$block/*Block/.statements/?expressionStatement/*ExpressionStatement/?call/*CallExpression"].begin($) }
                                                            pr.cc($.content, ($) => {
                                                                pr.cc($["selection"], ($) => {
                                                                    X_selection($)
                                                                })
                                                                pr.cc($["dataArgument"], ($) => {
                                                                    X_initialization($)
                                                                })
                                                                pr.cc($["callbackArgument"], ($) => {
                                                                    if ($ === null) {
                                                                        //FIXME??
                                                                    } else {
                                                                        X_initialization($)
                                                                    }
                                                                })
                                                                pr.cc($["thirdArgument"], ($) => {
                                                                    if ($ === null) {
                                                                        //FIXME??
                                                                    } else {
                                                                        X_initialization($)
                                                                    }
                                                                })
                                                            })
                                                            if (foo["$block/*Block/.statements/?expressionStatement/*ExpressionStatement/?call/*CallExpression"] !== undefined) { foo["$block/*Block/.statements/?expressionStatement/*ExpressionStatement/?call/*CallExpression"].end($) }
                                                        })($)
                                                    })
                                                    break
                                                }
                                                default: pr.au($[0])
                                            }
                                        })
                                        if (foo["$block/*Block/.statements/?expressionStatement/*ExpressionStatement"] !== undefined) { foo["$block/*Block/.statements/?expressionStatement/*ExpressionStatement"].end($) }
                                    })($)
                                })
                                break
                            }
                            case "ifStatement": {
                                pr.cc($[1], ($) => {
                                    ((
                                        $: api.TNGblock$_statements_ifStatement$<Annotation>,
                                    ) => {
                                        if (foo["$block/*Block/.statements/?ifStatement/*IfStatement"] !== undefined) { foo["$block/*Block/.statements/?ifStatement/*IfStatement"].begin($) }
                                        pr.cc($.content, ($) => {
                                            pr.cc($["expression"], ($) => {
                                                X_booleanExpression($)
                                            })
                                            pr.cc($["then"], ($) => {
                                                X_block($)
                                            })
                                            pr.cc($["else"], ($) => {
                                                if ($ === null) {
                                                    //FIXME??
                                                } else {
                                                    X_block($)
                                                }
                                            })
                                        })
                                        if (foo["$block/*Block/.statements/?ifStatement/*IfStatement"] !== undefined) { foo["$block/*Block/.statements/?ifStatement/*IfStatement"].end($) }
                                    })($)
                                })
                                break
                            }
                            default: pr.au($[0])
                        }
                    })
                })
            })
            if (foo["$block/*Block"] !== undefined) { foo["$block/*Block"].end($) }
        })($)
    }
    function X_booleanExpression(
        $: api.TGbooleanExpression<Annotation>,
    ) {
        switch ($[0]) {
            case "binaryExpression": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGbooleanExpression_binaryExpression$<Annotation>,
                    ) => {
                        if (foo["$booleanExpression/?binaryExpression/*BinaryExpression"] !== undefined) { foo["$booleanExpression/?binaryExpression/*BinaryExpression"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["left"], ($) => {
                                X_identifier($)
                            })
                            pr.cc($["operator"], ($) => {
                                switch ($[0]) {
                                    case "notEqual": {
                                        pr.cc($[1], ($) => {
                                            ((
                                                $: api.TNGbooleanExpression_binaryExpression$_operator_notEqual$<Annotation>,
                                            ) => {
                                                if (foo["$booleanExpression/?binaryExpression/*BinaryExpression/.operator/?notEqual/*ExclamationEqualsEqualsToken"] !== undefined) { foo["$booleanExpression/?binaryExpression/*BinaryExpression/.operator/?notEqual/*ExclamationEqualsEqualsToken"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    default: pr.au($[0])
                                }
                            })
                            pr.cc($["right"], ($) => {
                                ((
                                    $: api.TNGbooleanExpression_binaryExpression$_right$<Annotation>,
                                ) => {
                                    if (foo["$booleanExpression/?binaryExpression/*BinaryExpression/.right/*NullKeyword"] !== undefined) { foo["$booleanExpression/?binaryExpression/*BinaryExpression/.right/*NullKeyword"]($) }
                                })($)
                            })
                        })
                        if (foo["$booleanExpression/?binaryExpression/*BinaryExpression"] !== undefined) { foo["$booleanExpression/?binaryExpression/*BinaryExpression"].end($) }
                    })($)
                })
                break
            }
            case "prefixUnaryExpression": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGbooleanExpression_prefixUnaryExpression$<Annotation>,
                    ) => {
                        if (foo["$booleanExpression/?prefixUnaryExpression/*PrefixUnaryExpression"] !== undefined) { foo["$booleanExpression/?prefixUnaryExpression/*PrefixUnaryExpression"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["data"], ($) => {
                                X_initialization($)
                            })
                        })
                        if (foo["$booleanExpression/?prefixUnaryExpression/*PrefixUnaryExpression"] !== undefined) { foo["$booleanExpression/?prefixUnaryExpression/*PrefixUnaryExpression"].end($) }
                    })($)
                })
                break
            }
            default: pr.au($[0])
        }
    }
    function X_callback(
        $: api.TGcallback<Annotation>,
    ) {
        ((
            $: api.TNGcallback$<Annotation>,
        ) => {
            if (foo["$callback/*Parameter"] !== undefined) { foo["$callback/*Parameter"].begin($) }
            pr.cc($.content, ($) => {
                pr.cc($["name"], ($) => {
                    X_identifier($)
                })
                pr.cc($["type"], ($) => {
                    ((
                        $: api.TNGcallback$_type$<Annotation>,
                    ) => {
                        if (foo["$callback/*Parameter/.type/*FunctionType"] !== undefined) { foo["$callback/*Parameter/.type/*FunctionType"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["parameter"], ($) => {
                                ((
                                    $: api.TNGcallback$_type$_parameter$<Annotation>,
                                ) => {
                                    if (foo["$callback/*Parameter/.type/*FunctionType/.parameter/*Parameter"] !== undefined) { foo["$callback/*Parameter/.type/*FunctionType/.parameter/*Parameter"].begin($) }
                                    pr.cc($.content, ($) => {
                                        pr.cc($["name"], ($) => {
                                            X_identifier($)
                                        })
                                        pr.cc($["type"], ($) => {
                                            X_interface($)
                                        })
                                    })
                                    if (foo["$callback/*Parameter/.type/*FunctionType/.parameter/*Parameter"] !== undefined) { foo["$callback/*Parameter/.type/*FunctionType/.parameter/*Parameter"].end($) }
                                })($)
                            })
                            pr.cc($["void"], ($) => {
                                ((
                                    $: api.TNGcallback$_type$_void$<Annotation>,
                                ) => {
                                    if (foo["$callback/*Parameter/.type/*FunctionType/.void/*VoidKeyword"] !== undefined) { foo["$callback/*Parameter/.type/*FunctionType/.void/*VoidKeyword"]($) }
                                })($)
                            })
                        })
                        if (foo["$callback/*Parameter/.type/*FunctionType"] !== undefined) { foo["$callback/*Parameter/.type/*FunctionType"].end($) }
                    })($)
                })
            })
            if (foo["$callback/*Parameter"] !== undefined) { foo["$callback/*Parameter"].end($) }
        })($)
    }
    function X_identifier(
        $: api.TGidentifier<Annotation>,
    ) {
        ((
            $: api.TNGidentifier$<Annotation>,
        ) => {
            if (foo["$identifier/*Identifier"] !== undefined) { foo["$identifier/*Identifier"]($) }
        })($)
    }
    function X_interface(
        $: api.TGinterface<Annotation>,
    ) {
        switch ($[0]) {
            case "function": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGinterface_function$<Annotation>,
                    ) => {
                        if (foo["$interface/?function/*FunctionType"] !== undefined) { foo["$interface/?function/*FunctionType"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["dataParameter"], ($) => {
                                ((
                                    $: api.TNGinterface_function$_dataParameter$<Annotation>,
                                ) => {
                                    if (foo["$interface/?function/*FunctionType/.dataParameter/*Parameter"] !== undefined) { foo["$interface/?function/*FunctionType/.dataParameter/*Parameter"].begin($) }
                                    pr.cc($.content, ($) => {
                                        pr.cc($["name"], ($) => {
                                            X_identifier($)
                                        })
                                        pr.cc($["type"], ($) => {
                                            X_type($)
                                        })
                                    })
                                    if (foo["$interface/?function/*FunctionType/.dataParameter/*Parameter"] !== undefined) { foo["$interface/?function/*FunctionType/.dataParameter/*Parameter"].end($) }
                                })($)
                            })
                            pr.cc($["callbackParameter"], ($) => {
                                if ($ === null) {
                                    //FIXME??
                                } else {
                                    X_callback($)
                                }
                            })
                            pr.cc($["void"], ($) => {
                                ((
                                    $: api.TNGinterface_function$_void$<Annotation>,
                                ) => {
                                    if (foo["$interface/?function/*FunctionType/.void/*VoidKeyword"] !== undefined) { foo["$interface/?function/*FunctionType/.void/*VoidKeyword"]($) }
                                })($)
                            })
                        })
                        if (foo["$interface/?function/*FunctionType"] !== undefined) { foo["$interface/?function/*FunctionType"].end($) }
                    })($)
                })
                break
            }
            case "typeLiteral": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGinterface_typeLiteral$<Annotation>,
                    ) => {
                        if (foo["$interface/?typeLiteral/*TypeLiteral"] !== undefined) { foo["$interface/?typeLiteral/*TypeLiteral"].begin($) }
                        pr.cc($.content, ($) => {
                            $.forEach(($) => {
                                ((
                                    $: api.TNGinterface_typeLiteral$$<Annotation>,
                                ) => {
                                    if (foo["$interface/?typeLiteral/*TypeLiteral/*PropertySignature"] !== undefined) { foo["$interface/?typeLiteral/*TypeLiteral/*PropertySignature"].begin($) }
                                    pr.cc($.content, ($) => {
                                        pr.cc($["readonly"], ($) => {
                                            ((
                                                $: api.TNGinterface_typeLiteral$$_readonly$<Annotation>,
                                            ) => {
                                                if (foo["$interface/?typeLiteral/*TypeLiteral/*PropertySignature/.readonly/*ReadonlyKeyword"] !== undefined) { foo["$interface/?typeLiteral/*TypeLiteral/*PropertySignature/.readonly/*ReadonlyKeyword"]($) }
                                            })($)
                                        })
                                        pr.cc($["name"], ($) => {
                                            ((
                                                $: api.TNGinterface_typeLiteral$$_name$<Annotation>,
                                            ) => {
                                                if (foo["$interface/?typeLiteral/*TypeLiteral/*PropertySignature/.name/*StringLiteral"] !== undefined) { foo["$interface/?typeLiteral/*TypeLiteral/*PropertySignature/.name/*StringLiteral"]($) }
                                            })($)
                                        })
                                        pr.cc($["questionToken"], ($) => {
                                            if ($ === null) {
                                                //FIXME??
                                            } else {
                                                ((
                                                    $: api.TNGinterface_typeLiteral$$_questionToken$<Annotation>,
                                                ) => {
                                                    if (foo["$interface/?typeLiteral/*TypeLiteral/*PropertySignature/.questionToken/*QuestionToken"] !== undefined) { foo["$interface/?typeLiteral/*TypeLiteral/*PropertySignature/.questionToken/*QuestionToken"]($) }
                                                })($)
                                            }
                                        })
                                        pr.cc($["type"], ($) => {
                                            if ($ === null) {
                                                //FIXME??
                                            } else {
                                                X_interface($)
                                            }
                                        })
                                    })
                                    if (foo["$interface/?typeLiteral/*TypeLiteral/*PropertySignature"] !== undefined) { foo["$interface/?typeLiteral/*TypeLiteral/*PropertySignature"].end($) }
                                })($)
                            })
                        })
                        if (foo["$interface/?typeLiteral/*TypeLiteral"] !== undefined) { foo["$interface/?typeLiteral/*TypeLiteral"].end($) }
                    })($)
                })
                break
            }
            case "typeReference": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGinterface_typeReference$<Annotation>,
                    ) => {
                        if (foo["$interface/?typeReference/*TypeReference"] !== undefined) { foo["$interface/?typeReference/*TypeReference"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["name"], ($) => {
                                X_identifier($)
                            })
                            pr.cc($["parameters"], ($) => {
                                $.forEach(($) => {
                                    X_type($)
                                })
                            })
                        })
                        if (foo["$interface/?typeReference/*TypeReference"] !== undefined) { foo["$interface/?typeReference/*TypeReference"].end($) }
                    })($)
                })
                break
            }
            default: pr.au($[0])
        }
    }
    function X_initialization(
        $: api.TGinitialization<Annotation>,
    ) {
        switch ($[0]) {
            case "temlateExpression": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGinitialization_temlateExpression$<Annotation>,
                    ) => {
                        if (foo["$initialization/?temlateExpression/*TemplateExpression"] !== undefined) { foo["$initialization/?temlateExpression/*TemplateExpression"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["head"], ($) => {
                                ((
                                    $: api.TNGinitialization_temlateExpression$_head$<Annotation>,
                                ) => {
                                    if (foo["$initialization/?temlateExpression/*TemplateExpression/.head/*TemplateHead"] !== undefined) { foo["$initialization/?temlateExpression/*TemplateExpression/.head/*TemplateHead"]($) }
                                })($)
                            })
                            pr.cc($["span"], ($) => {
                                $.forEach(($) => {
                                    ((
                                        $: api.TNGinitialization_temlateExpression$_span$<Annotation>,
                                    ) => {
                                        if (foo["$initialization/?temlateExpression/*TemplateExpression/.span/*TemplateSpan"] !== undefined) { foo["$initialization/?temlateExpression/*TemplateExpression/.span/*TemplateSpan"].begin($) }
                                        pr.cc($.content, ($) => {
                                            pr.cc($["expression"], ($) => {
                                                X_initialization($)
                                            })
                                            pr.cc($["x"], ($) => {
                                                switch ($[0]) {
                                                    case "middle": {
                                                        pr.cc($[1], ($) => {
                                                            ((
                                                                $: api.TNGinitialization_temlateExpression$_span$_x_middle$<Annotation>,
                                                            ) => {
                                                                if (foo["$initialization/?temlateExpression/*TemplateExpression/.span/*TemplateSpan/.x/?middle/*TemplateMiddle"] !== undefined) { foo["$initialization/?temlateExpression/*TemplateExpression/.span/*TemplateSpan/.x/?middle/*TemplateMiddle"]($) }
                                                            })($)
                                                        })
                                                        break
                                                    }
                                                    case "tail": {
                                                        pr.cc($[1], ($) => {
                                                            ((
                                                                $: api.TNGinitialization_temlateExpression$_span$_x_tail$<Annotation>,
                                                            ) => {
                                                                if (foo["$initialization/?temlateExpression/*TemplateExpression/.span/*TemplateSpan/.x/?tail/*TemplateTail"] !== undefined) { foo["$initialization/?temlateExpression/*TemplateExpression/.span/*TemplateSpan/.x/?tail/*TemplateTail"]($) }
                                                            })($)
                                                        })
                                                        break
                                                    }
                                                    default: pr.au($[0])
                                                }
                                            })
                                        })
                                        if (foo["$initialization/?temlateExpression/*TemplateExpression/.span/*TemplateSpan"] !== undefined) { foo["$initialization/?temlateExpression/*TemplateExpression/.span/*TemplateSpan"].end($) }
                                    })($)
                                })
                            })
                        })
                        if (foo["$initialization/?temlateExpression/*TemplateExpression"] !== undefined) { foo["$initialization/?temlateExpression/*TemplateExpression"].end($) }
                    })($)
                })
                break
            }
            case "binaryExpression": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGinitialization_binaryExpression$<Annotation>,
                    ) => {
                        if (foo["$initialization/?binaryExpression/*BinaryExpression"] !== undefined) { foo["$initialization/?binaryExpression/*BinaryExpression"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["left"], ($) => {
                                X_selection($)
                            })
                            pr.cc($["operator"], ($) => {
                                switch ($[0]) {
                                    case "PlusToken": {
                                        pr.cc($[1], ($) => {
                                            ((
                                                $: api.TNGinitialization_binaryExpression$_operator_PlusToken$<Annotation>,
                                            ) => {
                                                if (foo["$initialization/?binaryExpression/*BinaryExpression/.operator/?PlusToken/*PlusToken"] !== undefined) { foo["$initialization/?binaryExpression/*BinaryExpression/.operator/?PlusToken/*PlusToken"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    default: pr.au($[0])
                                }
                            })
                            pr.cc($["right"], ($) => {
                                X_initialization($)
                            })
                        })
                        if (foo["$initialization/?binaryExpression/*BinaryExpression"] !== undefined) { foo["$initialization/?binaryExpression/*BinaryExpression"].end($) }
                    })($)
                })
                break
            }
            case "functionImplementation": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGinitialization_functionImplementation$<Annotation>,
                    ) => {
                        if (foo["$initialization/?functionImplementation/*ArrowFunction"] !== undefined) { foo["$initialization/?functionImplementation/*ArrowFunction"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["dataParameter"], ($) => {
                                if ($ === null) {
                                    //FIXME??
                                } else {
                                    X_typelessParameter($)
                                }
                            })
                            pr.cc($["interfaceParameter"], ($) => {
                                if ($ === null) {
                                    //FIXME??
                                } else {
                                    X_typelessParameter($)
                                }
                            })
                            pr.cc($["callbackParameter"], ($) => {
                                if ($ === null) {
                                    //FIXME??
                                } else {
                                    X_typelessParameter($)
                                }
                            })
                            pr.cc($["equalsGreaterThan"], ($) => {
                                ((
                                    $: api.TNGinitialization_functionImplementation$_equalsGreaterThan$<Annotation>,
                                ) => {
                                    if (foo["$initialization/?functionImplementation/*ArrowFunction/.equalsGreaterThan/*EqualsGreaterThanToken"] !== undefined) { foo["$initialization/?functionImplementation/*ArrowFunction/.equalsGreaterThan/*EqualsGreaterThanToken"]($) }
                                })($)
                            })
                            pr.cc($["block"], ($) => {
                                X_block($)
                            })
                        })
                        if (foo["$initialization/?functionImplementation/*ArrowFunction"] !== undefined) { foo["$initialization/?functionImplementation/*ArrowFunction"].end($) }
                    })($)
                })
                break
            }
            case "literal": {
                pr.cc($[1], ($) => {
                    X_literalDataInitialization($)
                })
                break
            }
            case "objectLiteral": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGinitialization_objectLiteral$<Annotation>,
                    ) => {
                        if (foo["$initialization/?objectLiteral/*ObjectLiteralExpression"] !== undefined) { foo["$initialization/?objectLiteral/*ObjectLiteralExpression"].begin($) }
                        pr.cc($.content, ($) => {
                            $.forEach(($) => {
                                ((
                                    $: api.TNGinitialization_objectLiteral$$<Annotation>,
                                ) => {
                                    if (foo["$initialization/?objectLiteral/*ObjectLiteralExpression/*PropertyAssignment"] !== undefined) { foo["$initialization/?objectLiteral/*ObjectLiteralExpression/*PropertyAssignment"].begin($) }
                                    pr.cc($.content, ($) => {
                                        pr.cc($["name"], ($) => {
                                            ((
                                                $: api.TNGinitialization_objectLiteral$$_name$<Annotation>,
                                            ) => {
                                                if (foo["$initialization/?objectLiteral/*ObjectLiteralExpression/*PropertyAssignment/.name/*StringLiteral"] !== undefined) { foo["$initialization/?objectLiteral/*ObjectLiteralExpression/*PropertyAssignment/.name/*StringLiteral"]($) }
                                            })($)
                                        })
                                        pr.cc($["initialization"], ($) => {
                                            X_initialization($)
                                        })
                                    })
                                    if (foo["$initialization/?objectLiteral/*ObjectLiteralExpression/*PropertyAssignment"] !== undefined) { foo["$initialization/?objectLiteral/*ObjectLiteralExpression/*PropertyAssignment"].end($) }
                                })($)
                            })
                        })
                        if (foo["$initialization/?objectLiteral/*ObjectLiteralExpression"] !== undefined) { foo["$initialization/?objectLiteral/*ObjectLiteralExpression"].end($) }
                    })($)
                })
                break
            }
            case "selection": {
                pr.cc($[1], ($) => {
                    X_selection($)
                })
                break
            }
            default: pr.au($[0])
        }
    }
    function X_literalDataInitialization(
        $: api.TGliteralDataInitialization<Annotation>,
    ) {
        switch ($[0]) {
            case "state": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGliteralDataInitialization_state$<Annotation>,
                    ) => {
                        if (foo["$literalDataInitialization/?state/*ArrayLiteralExpression"] !== undefined) { foo["$literalDataInitialization/?state/*ArrayLiteralExpression"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["state"], ($) => {
                                ((
                                    $: api.TNGliteralDataInitialization_state$_state$<Annotation>,
                                ) => {
                                    if (foo["$literalDataInitialization/?state/*ArrayLiteralExpression/.state/*StringLiteral"] !== undefined) { foo["$literalDataInitialization/?state/*ArrayLiteralExpression/.state/*StringLiteral"]($) }
                                })($)
                            })
                            pr.cc($["data"], ($) => {
                                X_initialization($)
                            })
                        })
                        if (foo["$literalDataInitialization/?state/*ArrayLiteralExpression"] !== undefined) { foo["$literalDataInitialization/?state/*ArrayLiteralExpression"].end($) }
                    })($)
                })
                break
            }
            case "false": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGliteralDataInitialization_false$<Annotation>,
                    ) => {
                        if (foo["$literalDataInitialization/?false/*FalseKeyword"] !== undefined) { foo["$literalDataInitialization/?false/*FalseKeyword"]($) }
                    })($)
                })
                break
            }
            case "stringLiteral": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGliteralDataInitialization_stringLiteral$<Annotation>,
                    ) => {
                        if (foo["$literalDataInitialization/?stringLiteral/*NoSubstitutionTemplateLiteral"] !== undefined) { foo["$literalDataInitialization/?stringLiteral/*NoSubstitutionTemplateLiteral"]($) }
                    })($)
                })
                break
            }
            case "numericLiteral": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGliteralDataInitialization_numericLiteral$<Annotation>,
                    ) => {
                        if (foo["$literalDataInitialization/?numericLiteral/*NumericLiteral"] !== undefined) { foo["$literalDataInitialization/?numericLiteral/*NumericLiteral"]($) }
                    })($)
                })
                break
            }
            case "null": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGliteralDataInitialization_null$<Annotation>,
                    ) => {
                        if (foo["$literalDataInitialization/?null/*NullKeyword"] !== undefined) { foo["$literalDataInitialization/?null/*NullKeyword"]($) }
                    })($)
                })
                break
            }
            case "true": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGliteralDataInitialization_true$<Annotation>,
                    ) => {
                        if (foo["$literalDataInitialization/?true/*TrueKeyword"] !== undefined) { foo["$literalDataInitialization/?true/*TrueKeyword"]($) }
                    })($)
                })
                break
            }
            case "array": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGliteralDataInitialization_array$<Annotation>,
                    ) => {
                        if (foo["$literalDataInitialization/?array/*ParenthesizedExpression"] !== undefined) { foo["$literalDataInitialization/?array/*ParenthesizedExpression"].begin($) }
                        pr.cc($.content, ($) => {
                            ((
                                $: api.TNGliteralDataInitialization_array$$<Annotation>,
                            ) => {
                                if (foo["$literalDataInitialization/?array/*ParenthesizedExpression/*ArrayLiteralExpression"] !== undefined) { foo["$literalDataInitialization/?array/*ParenthesizedExpression/*ArrayLiteralExpression"].begin($) }
                                pr.cc($.content, ($) => {
                                    $.forEach(($) => {
                                        X_initialization($)
                                    })
                                })
                                if (foo["$literalDataInitialization/?array/*ParenthesizedExpression/*ArrayLiteralExpression"] !== undefined) { foo["$literalDataInitialization/?array/*ParenthesizedExpression/*ArrayLiteralExpression"].end($) }
                            })($)
                        })
                        if (foo["$literalDataInitialization/?array/*ParenthesizedExpression"] !== undefined) { foo["$literalDataInitialization/?array/*ParenthesizedExpression"].end($) }
                    })($)
                })
                break
            }
            default: pr.au($[0])
        }
    }
    function X_parameterTriplet(
        $: api.TGparameterTriplet<Annotation>,
    ) {
        pr.cc($["dataParameter"], ($) => {
            ((
                $: api.TNGparameterTriplet_dataParameter$<Annotation>,
            ) => {
                if (foo["$parameterTriplet/.dataParameter/*Parameter"] !== undefined) { foo["$parameterTriplet/.dataParameter/*Parameter"].begin($) }
                pr.cc($.content, ($) => {
                    pr.cc($["name"], ($) => {
                        X_identifier($)
                    })
                    pr.cc($["type"], ($) => {
                        X_type($)
                    })
                })
                if (foo["$parameterTriplet/.dataParameter/*Parameter"] !== undefined) { foo["$parameterTriplet/.dataParameter/*Parameter"].end($) }
            })($)
        })
        pr.cc($["interfaceParameter"], ($) => {
            ((
                $: api.TNGparameterTriplet_interfaceParameter$<Annotation>,
            ) => {
                if (foo["$parameterTriplet/.interfaceParameter/*Parameter"] !== undefined) { foo["$parameterTriplet/.interfaceParameter/*Parameter"].begin($) }
                pr.cc($.content, ($) => {
                    pr.cc($["name"], ($) => {
                        X_identifier($)
                    })
                    pr.cc($["interface"], ($) => {
                        X_interface($)
                    })
                })
                if (foo["$parameterTriplet/.interfaceParameter/*Parameter"] !== undefined) { foo["$parameterTriplet/.interfaceParameter/*Parameter"].end($) }
            })($)
        })
        pr.cc($["callbackParameter"], ($) => {
            if ($ === null) {
                //FIXME??
            } else {
                X_callback($)
            }
        })
    }
    function X_selection(
        $: api.TGselection<Annotation>,
    ) {
        switch ($[0]) {
            case "call": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGselection_call$<Annotation>,
                    ) => {
                        if (foo["$selection/?call/*CallExpression"] !== undefined) { foo["$selection/?call/*CallExpression"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["name"], ($) => {
                                X_selection($)
                            })
                            pr.cc($["initialization"], ($) => {
                                X_initialization($)
                            })
                        })
                        if (foo["$selection/?call/*CallExpression"] !== undefined) { foo["$selection/?call/*CallExpression"].end($) }
                    })($)
                })
                break
            }
            case "conditial": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGselection_conditial$<Annotation>,
                    ) => {
                        if (foo["$selection/?conditial/*ConditionalExpression"] !== undefined) { foo["$selection/?conditial/*ConditionalExpression"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["condition"], ($) => {
                                X_selection($)
                            })
                            pr.cc($["questionToken"], ($) => {
                                ((
                                    $: api.TNGselection_conditial$_questionToken$<Annotation>,
                                ) => {
                                    if (foo["$selection/?conditial/*ConditionalExpression/.questionToken/*QuestionToken"] !== undefined) { foo["$selection/?conditial/*ConditionalExpression/.questionToken/*QuestionToken"]($) }
                                })($)
                            })
                            pr.cc($["then"], ($) => {
                                X_initialization($)
                            })
                            pr.cc($["colon"], ($) => {
                                ((
                                    $: api.TNGselection_conditial$_colon$<Annotation>,
                                ) => {
                                    if (foo["$selection/?conditial/*ConditionalExpression/.colon/*ColonToken"] !== undefined) { foo["$selection/?conditial/*ConditionalExpression/.colon/*ColonToken"]($) }
                                })($)
                            })
                            pr.cc($["else"], ($) => {
                                X_initialization($)
                            })
                        })
                        if (foo["$selection/?conditial/*ConditionalExpression"] !== undefined) { foo["$selection/?conditial/*ConditionalExpression"].end($) }
                    })($)
                })
                break
            }
            case "identifier": {
                pr.cc($[1], ($) => {
                    X_identifier($)
                })
                break
            }
            case "propertyAccess": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGselection_propertyAccess$<Annotation>,
                    ) => {
                        if (foo["$selection/?propertyAccess/*PropertyAccessExpression"] !== undefined) { foo["$selection/?propertyAccess/*PropertyAccessExpression"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["first"], ($) => {
                                X_selection($)
                            })
                            pr.cc($["second"], ($) => {
                                X_identifier($)
                            })
                        })
                        if (foo["$selection/?propertyAccess/*PropertyAccessExpression"] !== undefined) { foo["$selection/?propertyAccess/*PropertyAccessExpression"].end($) }
                    })($)
                })
                break
            }
            default: pr.au($[0])
        }
    }
    function X_type(
        $: api.TGtype<Annotation>,
    ) {
        switch ($[0]) {
            case "array": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_array$<Annotation>,
                    ) => {
                        if (foo["$type/?array/*ArrayType"] !== undefined) { foo["$type/?array/*ArrayType"].begin($) }
                        pr.cc($.content, ($) => {
                            X_type($)
                        })
                        if (foo["$type/?array/*ArrayType"] !== undefined) { foo["$type/?array/*ArrayType"].end($) }
                    })($)
                })
                break
            }
            case "boolean": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_boolean$<Annotation>,
                    ) => {
                        if (foo["$type/?boolean/*BooleanKeyword"] !== undefined) { foo["$type/?boolean/*BooleanKeyword"]($) }
                    })($)
                })
                break
            }
            case "string": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_string$<Annotation>,
                    ) => {
                        if (foo["$type/?string/*StringKeyword"] !== undefined) { foo["$type/?string/*StringKeyword"]($) }
                    })($)
                })
                break
            }
            case "number": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_number$<Annotation>,
                    ) => {
                        if (foo["$type/?number/*NumberKeyword"] !== undefined) { foo["$type/?number/*NumberKeyword"]($) }
                    })($)
                })
                break
            }
            case "literalType": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_literalType$<Annotation>,
                    ) => {
                        if (foo["$type/?literalType/*LiteralType"] !== undefined) { foo["$type/?literalType/*LiteralType"].begin($) }
                        pr.cc($.content, ($) => {
                            ((
                                $: api.TNGtype_literalType$$<Annotation>,
                            ) => {
                                if (foo["$type/?literalType/*LiteralType/*NullKeyword"] !== undefined) { foo["$type/?literalType/*LiteralType/*NullKeyword"]($) }
                            })($)
                        })
                        if (foo["$type/?literalType/*LiteralType"] !== undefined) { foo["$type/?literalType/*LiteralType"].end($) }
                    })($)
                })
                break
            }
            case "typeLiteral": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_typeLiteral$<Annotation>,
                    ) => {
                        if (foo["$type/?typeLiteral/*TypeLiteral"] !== undefined) { foo["$type/?typeLiteral/*TypeLiteral"].begin($) }
                        pr.cc($.content, ($) => {
                            if ($ === null) {
                                //FIXME??
                            } else {
                                switch ($[0]) {
                                    case "index": {
                                        pr.cc($[1], ($) => {
                                            ((
                                                $: api.TNGtype_typeLiteral$_index$<Annotation>,
                                            ) => {
                                                if (foo["$type/?typeLiteral/*TypeLiteral/?index/*IndexSignature"] !== undefined) { foo["$type/?typeLiteral/*TypeLiteral/?index/*IndexSignature"].begin($) }
                                                pr.cc($.content, ($) => {
                                                    pr.cc($["key"], ($) => {
                                                        ((
                                                            $: api.TNGtype_typeLiteral$_index$_key$<Annotation>,
                                                        ) => {
                                                            if (foo["$type/?typeLiteral/*TypeLiteral/?index/*IndexSignature/.key/*Parameter"] !== undefined) { foo["$type/?typeLiteral/*TypeLiteral/?index/*IndexSignature/.key/*Parameter"].begin($) }
                                                            pr.cc($.content, ($) => {
                                                                pr.cc($["name"], ($) => {
                                                                    X_identifier($)
                                                                })
                                                                pr.cc($["type"], ($) => {
                                                                    ((
                                                                        $: api.TNGtype_typeLiteral$_index$_key$_type$<Annotation>,
                                                                    ) => {
                                                                        if (foo["$type/?typeLiteral/*TypeLiteral/?index/*IndexSignature/.key/*Parameter/.type/*StringKeyword"] !== undefined) { foo["$type/?typeLiteral/*TypeLiteral/?index/*IndexSignature/.key/*Parameter/.type/*StringKeyword"]($) }
                                                                    })($)
                                                                })
                                                            })
                                                            if (foo["$type/?typeLiteral/*TypeLiteral/?index/*IndexSignature/.key/*Parameter"] !== undefined) { foo["$type/?typeLiteral/*TypeLiteral/?index/*IndexSignature/.key/*Parameter"].end($) }
                                                        })($)
                                                    })
                                                    pr.cc($["type"], ($) => {
                                                        X_type($)
                                                    })
                                                })
                                                if (foo["$type/?typeLiteral/*TypeLiteral/?index/*IndexSignature"] !== undefined) { foo["$type/?typeLiteral/*TypeLiteral/?index/*IndexSignature"].end($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "properties": {
                                        pr.cc($[1], ($) => {
                                            $.forEach(($) => {
                                                ((
                                                    $: api.TNGtype_typeLiteral$_properties$<Annotation>,
                                                ) => {
                                                    if (foo["$type/?typeLiteral/*TypeLiteral/?properties/*PropertySignature"] !== undefined) { foo["$type/?typeLiteral/*TypeLiteral/?properties/*PropertySignature"].begin($) }
                                                    pr.cc($.content, ($) => {
                                                        pr.cc($["readonly"], ($) => {
                                                            ((
                                                                $: api.TNGtype_typeLiteral$_properties$_readonly$<Annotation>,
                                                            ) => {
                                                                if (foo["$type/?typeLiteral/*TypeLiteral/?properties/*PropertySignature/.readonly/*ReadonlyKeyword"] !== undefined) { foo["$type/?typeLiteral/*TypeLiteral/?properties/*PropertySignature/.readonly/*ReadonlyKeyword"]($) }
                                                            })($)
                                                        })
                                                        pr.cc($["name"], ($) => {
                                                            ((
                                                                $: api.TNGtype_typeLiteral$_properties$_name$<Annotation>,
                                                            ) => {
                                                                if (foo["$type/?typeLiteral/*TypeLiteral/?properties/*PropertySignature/.name/*StringLiteral"] !== undefined) { foo["$type/?typeLiteral/*TypeLiteral/?properties/*PropertySignature/.name/*StringLiteral"]($) }
                                                            })($)
                                                        })
                                                        pr.cc($["questionToken"], ($) => {
                                                            if ($ === null) {
                                                                //FIXME??
                                                            } else {
                                                                ((
                                                                    $: api.TNGtype_typeLiteral$_properties$_questionToken$<Annotation>,
                                                                ) => {
                                                                    if (foo["$type/?typeLiteral/*TypeLiteral/?properties/*PropertySignature/.questionToken/*QuestionToken"] !== undefined) { foo["$type/?typeLiteral/*TypeLiteral/?properties/*PropertySignature/.questionToken/*QuestionToken"]($) }
                                                                })($)
                                                            }
                                                        })
                                                        pr.cc($["type"], ($) => {
                                                            X_type($)
                                                        })
                                                    })
                                                    if (foo["$type/?typeLiteral/*TypeLiteral/?properties/*PropertySignature"] !== undefined) { foo["$type/?typeLiteral/*TypeLiteral/?properties/*PropertySignature"].end($) }
                                                })($)
                                            })
                                        })
                                        break
                                    }
                                    default: pr.au($[0])
                                }
                            }
                        })
                        if (foo["$type/?typeLiteral/*TypeLiteral"] !== undefined) { foo["$type/?typeLiteral/*TypeLiteral"].end($) }
                    })($)
                })
                break
            }
            case "typeReference": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_typeReference$<Annotation>,
                    ) => {
                        if (foo["$type/?typeReference/*TypeReference"] !== undefined) { foo["$type/?typeReference/*TypeReference"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["referencedType"], ($) => {
                                switch ($[0]) {
                                    case "identifier": {
                                        pr.cc($[1], ($) => {
                                            X_identifier($)
                                        })
                                        break
                                    }
                                    case "qualifiedName": {
                                        pr.cc($[1], ($) => {
                                            ((
                                                $: api.TNGtype_typeReference$_referencedType_qualifiedName$<Annotation>,
                                            ) => {
                                                if (foo["$type/?typeReference/*TypeReference/.referencedType/?qualifiedName/*QualifiedName"] !== undefined) { foo["$type/?typeReference/*TypeReference/.referencedType/?qualifiedName/*QualifiedName"].begin($) }
                                                pr.cc($.content, ($) => {
                                                    pr.cc($["context"], ($) => {
                                                        X_identifier($)
                                                    })
                                                    pr.cc($["type"], ($) => {
                                                        X_identifier($)
                                                    })
                                                })
                                                if (foo["$type/?typeReference/*TypeReference/.referencedType/?qualifiedName/*QualifiedName"] !== undefined) { foo["$type/?typeReference/*TypeReference/.referencedType/?qualifiedName/*QualifiedName"].end($) }
                                            })($)
                                        })
                                        break
                                    }
                                    default: pr.au($[0])
                                }
                            })
                            pr.cc($["typeArguments"], ($) => {
                                $.forEach(($) => {
                                    X_type($)
                                })
                            })
                        })
                        if (foo["$type/?typeReference/*TypeReference"] !== undefined) { foo["$type/?typeReference/*TypeReference"].end($) }
                    })($)
                })
                break
            }
            case "union": {
                pr.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_union$<Annotation>,
                    ) => {
                        if (foo["$type/?union/*UnionType"] !== undefined) { foo["$type/?union/*UnionType"].begin($) }
                        pr.cc($.content, ($) => {
                            $.forEach(($) => {
                                ((
                                    $: api.TNGtype_union$$<Annotation>,
                                ) => {
                                    if (foo["$type/?union/*UnionType/*TupleType"] !== undefined) { foo["$type/?union/*UnionType/*TupleType"].begin($) }
                                    pr.cc($.content, ($) => {
                                        pr.cc($["state"], ($) => {
                                            ((
                                                $: api.TNGtype_union$$_state$<Annotation>,
                                            ) => {
                                                if (foo["$type/?union/*UnionType/*TupleType/.state/*LiteralType"] !== undefined) { foo["$type/?union/*UnionType/*TupleType/.state/*LiteralType"].begin($) }
                                                pr.cc($.content, ($) => {
                                                    ((
                                                        $: api.TNGtype_union$$_state$$<Annotation>,
                                                    ) => {
                                                        if (foo["$type/?union/*UnionType/*TupleType/.state/*LiteralType/*StringLiteral"] !== undefined) { foo["$type/?union/*UnionType/*TupleType/.state/*LiteralType/*StringLiteral"]($) }
                                                    })($)
                                                })
                                                if (foo["$type/?union/*UnionType/*TupleType/.state/*LiteralType"] !== undefined) { foo["$type/?union/*UnionType/*TupleType/.state/*LiteralType"].end($) }
                                            })($)
                                        })
                                        pr.cc($["data"], ($) => {
                                            X_type($)
                                        })
                                    })
                                    if (foo["$type/?union/*UnionType/*TupleType"] !== undefined) { foo["$type/?union/*UnionType/*TupleType"].end($) }
                                })($)
                            })
                        })
                        if (foo["$type/?union/*UnionType"] !== undefined) { foo["$type/?union/*UnionType"].end($) }
                    })($)
                })
                break
            }
            default: pr.au($[0])
        }
    }
    function X_typelessParameter(
        $: api.TGtypelessParameter<Annotation>,
    ) {
        ((
            $: api.TNGtypelessParameter$<Annotation>,
        ) => {
            if (foo["$typelessParameter/*Parameter"] !== undefined) { foo["$typelessParameter/*Parameter"].begin($) }
            pr.cc($.content, ($) => {
                X_identifier($)
            })
            if (foo["$typelessParameter/*Parameter"] !== undefined) { foo["$typelessParameter/*Parameter"].end($) }
        })($)
    }
    ((
        $: api.TNroot<Annotation>,
    ) => {
        if (foo[""] !== undefined) { foo[""].begin($) }
        pr.cc($.content, ($) => {
            pr.cc($["imports"], ($) => {
                $.forEach(($) => {
                    ((
                        $: api.TNroot_imports$<Annotation>,
                    ) => {
                        if (foo["/.imports/*ImportDeclaration"] !== undefined) { foo["/.imports/*ImportDeclaration"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["clause"], ($) => {
                                ((
                                    $: api.TNroot_imports$_clause$<Annotation>,
                                ) => {
                                    if (foo["/.imports/*ImportDeclaration/.clause/*ImportClause"] !== undefined) { foo["/.imports/*ImportDeclaration/.clause/*ImportClause"].begin($) }
                                    pr.cc($.content, ($) => {
                                        switch ($[0]) {
                                            case "namespace": {
                                                pr.cc($[1], ($) => {
                                                    ((
                                                        $: api.TNroot_imports$_clause$_namespace$<Annotation>,
                                                    ) => {
                                                        if (foo["/.imports/*ImportDeclaration/.clause/*ImportClause/?namespace/*NamespaceImport"] !== undefined) { foo["/.imports/*ImportDeclaration/.clause/*ImportClause/?namespace/*NamespaceImport"].begin($) }
                                                        pr.cc($.content, ($) => {
                                                            X_identifier($)
                                                        })
                                                        if (foo["/.imports/*ImportDeclaration/.clause/*ImportClause/?namespace/*NamespaceImport"] !== undefined) { foo["/.imports/*ImportDeclaration/.clause/*ImportClause/?namespace/*NamespaceImport"].end($) }
                                                    })($)
                                                })
                                                break
                                            }
                                            case "named": {
                                                pr.cc($[1], ($) => {
                                                    ((
                                                        $: api.TNroot_imports$_clause$_named$<Annotation>,
                                                    ) => {
                                                        if (foo["/.imports/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports"] !== undefined) { foo["/.imports/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports"].begin($) }
                                                        pr.cc($.content, ($) => {
                                                            $.forEach(($) => {
                                                                ((
                                                                    $: api.TNroot_imports$_clause$_named$$<Annotation>,
                                                                ) => {
                                                                    if (foo["/.imports/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports/*ImportSpecifier"] !== undefined) { foo["/.imports/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports/*ImportSpecifier"].begin($) }
                                                                    pr.cc($.content, ($) => {
                                                                        pr.cc($["name"], ($) => {
                                                                            X_identifier($)
                                                                        })
                                                                        pr.cc($["as"], ($) => {
                                                                            if ($ === null) {
                                                                                //FIXME??
                                                                            } else {
                                                                                X_identifier($)
                                                                            }
                                                                        })
                                                                    })
                                                                    if (foo["/.imports/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports/*ImportSpecifier"] !== undefined) { foo["/.imports/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports/*ImportSpecifier"].end($) }
                                                                })($)
                                                            })
                                                        })
                                                        if (foo["/.imports/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports"] !== undefined) { foo["/.imports/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports"].end($) }
                                                    })($)
                                                })
                                                break
                                            }
                                            default: pr.au($[0])
                                        }
                                    })
                                    if (foo["/.imports/*ImportDeclaration/.clause/*ImportClause"] !== undefined) { foo["/.imports/*ImportDeclaration/.clause/*ImportClause"].end($) }
                                })($)
                            })
                            pr.cc($["file"], ($) => {
                                ((
                                    $: api.TNroot_imports$_file$<Annotation>,
                                ) => {
                                    if (foo["/.imports/*ImportDeclaration/.file/*StringLiteral"] !== undefined) { foo["/.imports/*ImportDeclaration/.file/*StringLiteral"]($) }
                                })($)
                            })
                        })
                        if (foo["/.imports/*ImportDeclaration"] !== undefined) { foo["/.imports/*ImportDeclaration"].end($) }
                    })($)
                })
            })
            pr.cc($["procedures"], ($) => {
                $.forEach(($) => {
                    ((
                        $: api.TNroot_procedures$<Annotation>,
                    ) => {
                        if (foo["/.procedures/*FunctionDeclaration"] !== undefined) { foo["/.procedures/*FunctionDeclaration"].begin($) }
                        pr.cc($.content, ($) => {
                            pr.cc($["export"], ($) => {
                                ((
                                    $: api.TNroot_procedures$_export$<Annotation>,
                                ) => {
                                    if (foo["/.procedures/*FunctionDeclaration/.export/*ExportKeyword"] !== undefined) { foo["/.procedures/*FunctionDeclaration/.export/*ExportKeyword"]($) }
                                })($)
                            })
                            pr.cc($["name"], ($) => {
                                X_identifier($)
                            })
                            pr.cc($["typeParameters"], ($) => {
                                $.forEach(($) => {
                                    ((
                                        $: api.TNroot_procedures$_typeParameters$<Annotation>,
                                    ) => {
                                        if (foo["/.procedures/*FunctionDeclaration/.typeParameters/*TypeParameter"] !== undefined) { foo["/.procedures/*FunctionDeclaration/.typeParameters/*TypeParameter"].begin($) }
                                        pr.cc($.content, ($) => {
                                            X_identifier($)
                                        })
                                        if (foo["/.procedures/*FunctionDeclaration/.typeParameters/*TypeParameter"] !== undefined) { foo["/.procedures/*FunctionDeclaration/.typeParameters/*TypeParameter"].end($) }
                                    })($)
                                })
                            })
                            pr.cc($["parameters"], ($) => {
                                $.forEach(($) => {
                                    ((
                                        $: api.TNroot_procedures$_parameters$<Annotation>,
                                    ) => {
                                        if (foo["/.procedures/*FunctionDeclaration/.parameters/*Parameter"] !== undefined) { foo["/.procedures/*FunctionDeclaration/.parameters/*Parameter"].begin($) }
                                        pr.cc($.content, ($) => {
                                            pr.cc($["name"], ($) => {
                                                X_identifier($)
                                            })
                                            pr.cc($["type"], ($) => {
                                                switch ($[0]) {
                                                    case "func": {
                                                        pr.cc($[1], ($) => {
                                                            ((
                                                                $: api.TNroot_procedures$_parameters$_type_func$<Annotation>,
                                                            ) => {
                                                                if (foo["/.procedures/*FunctionDeclaration/.parameters/*Parameter/.type/?func/*FunctionType"] !== undefined) { foo["/.procedures/*FunctionDeclaration/.parameters/*Parameter/.type/?func/*FunctionType"].begin($) }
                                                                pr.cc($.content, ($) => {
                                                                    pr.cc($["parameters"], ($) => {
                                                                        ((
                                                                            $: api.TNroot_procedures$_parameters$_type_func$_parameters$<Annotation>,
                                                                        ) => {
                                                                            if (foo["/.procedures/*FunctionDeclaration/.parameters/*Parameter/.type/?func/*FunctionType/.parameters/*Parameter"] !== undefined) { foo["/.procedures/*FunctionDeclaration/.parameters/*Parameter/.type/?func/*FunctionType/.parameters/*Parameter"].begin($) }
                                                                            pr.cc($.content, ($) => {
                                                                                pr.cc($["name"], ($) => {
                                                                                    X_identifier($)
                                                                                })
                                                                                pr.cc($["type"], ($) => {
                                                                                    X_type($)
                                                                                })
                                                                            })
                                                                            if (foo["/.procedures/*FunctionDeclaration/.parameters/*Parameter/.type/?func/*FunctionType/.parameters/*Parameter"] !== undefined) { foo["/.procedures/*FunctionDeclaration/.parameters/*Parameter/.type/?func/*FunctionType/.parameters/*Parameter"].end($) }
                                                                        })($)
                                                                    })
                                                                    pr.cc($["returnType"], ($) => {
                                                                        X_type($)
                                                                    })
                                                                })
                                                                if (foo["/.procedures/*FunctionDeclaration/.parameters/*Parameter/.type/?func/*FunctionType"] !== undefined) { foo["/.procedures/*FunctionDeclaration/.parameters/*Parameter/.type/?func/*FunctionType"].end($) }
                                                            })($)
                                                        })
                                                        break
                                                    }
                                                    case "typeReference": {
                                                        pr.cc($[1], ($) => {
                                                            ((
                                                                $: api.TNroot_procedures$_parameters$_type_typeReference$<Annotation>,
                                                            ) => {
                                                                if (foo["/.procedures/*FunctionDeclaration/.parameters/*Parameter/.type/?typeReference/*TypeReference"] !== undefined) { foo["/.procedures/*FunctionDeclaration/.parameters/*Parameter/.type/?typeReference/*TypeReference"].begin($) }
                                                                pr.cc($.content, ($) => {
                                                                    pr.cc($["name"], ($) => {
                                                                        ((
                                                                            $: api.TNroot_procedures$_parameters$_type_typeReference$_name$<Annotation>,
                                                                        ) => {
                                                                            if (foo["/.procedures/*FunctionDeclaration/.parameters/*Parameter/.type/?typeReference/*TypeReference/.name/*QualifiedName"] !== undefined) { foo["/.procedures/*FunctionDeclaration/.parameters/*Parameter/.type/?typeReference/*TypeReference/.name/*QualifiedName"].begin($) }
                                                                            pr.cc($.content, ($) => {
                                                                                pr.cc($["context"], ($) => {
                                                                                    ((
                                                                                        $: api.TNroot_procedures$_parameters$_type_typeReference$_name$_context$<Annotation>,
                                                                                    ) => {
                                                                                        if (foo["/.procedures/*FunctionDeclaration/.parameters/*Parameter/.type/?typeReference/*TypeReference/.name/*QualifiedName/.context/*Identifier"] !== undefined) { foo["/.procedures/*FunctionDeclaration/.parameters/*Parameter/.type/?typeReference/*TypeReference/.name/*QualifiedName/.context/*Identifier"]($) }
                                                                                    })($)
                                                                                })
                                                                                pr.cc($["type"], ($) => {
                                                                                    ((
                                                                                        $: api.TNroot_procedures$_parameters$_type_typeReference$_name$_type$<Annotation>,
                                                                                    ) => {
                                                                                        if (foo["/.procedures/*FunctionDeclaration/.parameters/*Parameter/.type/?typeReference/*TypeReference/.name/*QualifiedName/.type/*Identifier"] !== undefined) { foo["/.procedures/*FunctionDeclaration/.parameters/*Parameter/.type/?typeReference/*TypeReference/.name/*QualifiedName/.type/*Identifier"]($) }
                                                                                    })($)
                                                                                })
                                                                            })
                                                                            if (foo["/.procedures/*FunctionDeclaration/.parameters/*Parameter/.type/?typeReference/*TypeReference/.name/*QualifiedName"] !== undefined) { foo["/.procedures/*FunctionDeclaration/.parameters/*Parameter/.type/?typeReference/*TypeReference/.name/*QualifiedName"].end($) }
                                                                        })($)
                                                                    })
                                                                })
                                                                if (foo["/.procedures/*FunctionDeclaration/.parameters/*Parameter/.type/?typeReference/*TypeReference"] !== undefined) { foo["/.procedures/*FunctionDeclaration/.parameters/*Parameter/.type/?typeReference/*TypeReference"].end($) }
                                                            })($)
                                                        })
                                                        break
                                                    }
                                                    default: pr.au($[0])
                                                }
                                            })
                                        })
                                        if (foo["/.procedures/*FunctionDeclaration/.parameters/*Parameter"] !== undefined) { foo["/.procedures/*FunctionDeclaration/.parameters/*Parameter"].end($) }
                                    })($)
                                })
                            })
                            pr.cc($["returnType"], ($) => {
                                ((
                                    $: api.TNroot_procedures$_returnType$<Annotation>,
                                ) => {
                                    if (foo["/.procedures/*FunctionDeclaration/.returnType/*TypeReference"] !== undefined) { foo["/.procedures/*FunctionDeclaration/.returnType/*TypeReference"].begin($) }
                                    pr.cc($.content, ($) => {
                                        pr.cc($["referencedType"], ($) => {
                                            switch ($[0]) {
                                                case "identifier": {
                                                    pr.cc($[1], ($) => {
                                                        X_identifier($)
                                                    })
                                                    break
                                                }
                                                case "qualifiedName": {
                                                    pr.cc($[1], ($) => {
                                                        ((
                                                            $: api.TNroot_procedures$_returnType$_referencedType_qualifiedName$<Annotation>,
                                                        ) => {
                                                            if (foo["/.procedures/*FunctionDeclaration/.returnType/*TypeReference/.referencedType/?qualifiedName/*QualifiedName"] !== undefined) { foo["/.procedures/*FunctionDeclaration/.returnType/*TypeReference/.referencedType/?qualifiedName/*QualifiedName"].begin($) }
                                                            pr.cc($.content, ($) => {
                                                                pr.cc($["context"], ($) => {
                                                                    X_identifier($)
                                                                })
                                                                pr.cc($["type"], ($) => {
                                                                    X_identifier($)
                                                                })
                                                            })
                                                            if (foo["/.procedures/*FunctionDeclaration/.returnType/*TypeReference/.referencedType/?qualifiedName/*QualifiedName"] !== undefined) { foo["/.procedures/*FunctionDeclaration/.returnType/*TypeReference/.referencedType/?qualifiedName/*QualifiedName"].end($) }
                                                        })($)
                                                    })
                                                    break
                                                }
                                                default: pr.au($[0])
                                            }
                                        })
                                        pr.cc($["typeArguments"], ($) => {
                                            $.forEach(($) => {
                                                X_type($)
                                            })
                                        })
                                    })
                                    if (foo["/.procedures/*FunctionDeclaration/.returnType/*TypeReference"] !== undefined) { foo["/.procedures/*FunctionDeclaration/.returnType/*TypeReference"].end($) }
                                })($)
                            })
                            pr.cc($["block"], ($) => {
                                ((
                                    $: api.TNroot_procedures$_block$<Annotation>,
                                ) => {
                                    if (foo["/.procedures/*FunctionDeclaration/.block/*Block"] !== undefined) { foo["/.procedures/*FunctionDeclaration/.block/*Block"].begin($) }
                                    pr.cc($.content, ($) => {
                                        pr.cc($["returnStatement"], ($) => {
                                            ((
                                                $: api.TNroot_procedures$_block$_returnStatement$<Annotation>,
                                            ) => {
                                                if (foo["/.procedures/*FunctionDeclaration/.block/*Block/.returnStatement/*ReturnStatement"] !== undefined) { foo["/.procedures/*FunctionDeclaration/.block/*Block/.returnStatement/*ReturnStatement"].begin($) }
                                                pr.cc($.content, ($) => {
                                                    X_initialization($)
                                                })
                                                if (foo["/.procedures/*FunctionDeclaration/.block/*Block/.returnStatement/*ReturnStatement"] !== undefined) { foo["/.procedures/*FunctionDeclaration/.block/*Block/.returnStatement/*ReturnStatement"].end($) }
                                            })($)
                                        })
                                    })
                                    if (foo["/.procedures/*FunctionDeclaration/.block/*Block"] !== undefined) { foo["/.procedures/*FunctionDeclaration/.block/*Block"].end($) }
                                })($)
                            })
                        })
                        if (foo["/.procedures/*FunctionDeclaration"] !== undefined) { foo["/.procedures/*FunctionDeclaration"].end($) }
                    })($)
                })
            })
            pr.cc($["endOfFile"], ($) => {
                ((
                    $: api.TNroot_endOfFile$<Annotation>,
                ) => {
                    if (foo["/.endOfFile/*EndOfFileToken"] !== undefined) { foo["/.endOfFile/*EndOfFileToken"]($) }
                })($)
            })
        })
        if (foo[""] !== undefined) { foo[""].end($) }
    })($)
}