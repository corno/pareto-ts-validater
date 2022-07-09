import * as pl from "pareto-lib-core"
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
            pl.cc($.content, ($) => {
                pl.cc($["variables"], ($) => {
                    $.forEach(($) => {
                        ((
                            $: api.TNGblock$_variables$<Annotation>,
                        ) => {
                            if (foo["$block/*Block/.variables/*VariableStatement"] !== undefined) { foo["$block/*Block/.variables/*VariableStatement"].begin($) }
                            pl.cc($.content, ($) => {
                                ((
                                    $: api.TNGblock$_variables$$<Annotation>,
                                ) => {
                                    if (foo["$block/*Block/.variables/*VariableStatement/*VariableDeclarationList"] !== undefined) { foo["$block/*Block/.variables/*VariableStatement/*VariableDeclarationList"].begin($) }
                                    pl.cc($.content, ($) => {
                                        ((
                                            $: api.TNGblock$_variables$$$<Annotation>,
                                        ) => {
                                            if (foo["$block/*Block/.variables/*VariableStatement/*VariableDeclarationList/*VariableDeclaration"] !== undefined) { foo["$block/*Block/.variables/*VariableStatement/*VariableDeclarationList/*VariableDeclaration"].begin($) }
                                            pl.cc($.content, ($) => {
                                                pl.cc($["name"], ($) => {
                                                    X_identifier($)
                                                })
                                                pl.cc($["type"], ($) => {
                                                    if ($ === null) {
                                                        //FIXME??
                                                    } else {
                                                        X_type($)
                                                    }
                                                })
                                                pl.cc($["initialization"], ($) => {
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
                pl.cc($["nestedProcedures"], ($) => {
                    $.forEach(($) => {
                        ((
                            $: api.TNGblock$_nestedProcedures$<Annotation>,
                        ) => {
                            if (foo["$block/*Block/.nestedProcedures/*FunctionDeclaration"] !== undefined) { foo["$block/*Block/.nestedProcedures/*FunctionDeclaration"].begin($) }
                            pl.cc($.content, ($) => {
                                pl.cc($["name"], ($) => {
                                    X_identifier($)
                                })
                                pl.cc($["parameters"], ($) => {
                                    X_parameterTriplet($)
                                })
                                pl.cc($["void"], ($) => {
                                    ((
                                        $: api.TNGblock$_nestedProcedures$_void$<Annotation>,
                                    ) => {
                                        if (foo["$block/*Block/.nestedProcedures/*FunctionDeclaration/.void/*VoidKeyword"] !== undefined) { foo["$block/*Block/.nestedProcedures/*FunctionDeclaration/.void/*VoidKeyword"]($) }
                                    })($)
                                })
                                pl.cc($["block"], ($) => {
                                    X_block($)
                                })
                            })
                            if (foo["$block/*Block/.nestedProcedures/*FunctionDeclaration"] !== undefined) { foo["$block/*Block/.nestedProcedures/*FunctionDeclaration"].end($) }
                        })($)
                    })
                })
                pl.cc($["statements"], ($) => {
                    $.forEach(($) => {
                        switch ($[0]) {
                            case "expressionStatement": {
                                pl.cc($[1], ($) => {
                                    ((
                                        $: api.TNGblock$_statements_expressionStatement$<Annotation>,
                                    ) => {
                                        if (foo["$block/*Block/.statements/?expressionStatement/*ExpressionStatement"] !== undefined) { foo["$block/*Block/.statements/?expressionStatement/*ExpressionStatement"].begin($) }
                                        pl.cc($.content, ($) => {
                                            switch ($[0]) {
                                                case "binaryExpression": {
                                                    pl.cc($[1], ($) => {
                                                        ((
                                                            $: api.TNGblock$_statements_expressionStatement$_binaryExpression$<Annotation>,
                                                        ) => {
                                                            if (foo["$block/*Block/.statements/?expressionStatement/*ExpressionStatement/?binaryExpression/*BinaryExpression"] !== undefined) { foo["$block/*Block/.statements/?expressionStatement/*ExpressionStatement/?binaryExpression/*BinaryExpression"].begin($) }
                                                            pl.cc($.content, ($) => {
                                                                pl.cc($["referencedVariable"], ($) => {
                                                                    X_identifier($)
                                                                })
                                                                pl.cc($["operator"], ($) => {
                                                                    switch ($[0]) {
                                                                        case "equalsToken": {
                                                                            pl.cc($[1], ($) => {
                                                                                ((
                                                                                    $: api.TNGblock$_statements_expressionStatement$_binaryExpression$_operator_equalsToken$<Annotation>,
                                                                                ) => {
                                                                                    if (foo["$block/*Block/.statements/?expressionStatement/*ExpressionStatement/?binaryExpression/*BinaryExpression/.operator/?equalsToken/*EqualsToken"] !== undefined) { foo["$block/*Block/.statements/?expressionStatement/*ExpressionStatement/?binaryExpression/*BinaryExpression/.operator/?equalsToken/*EqualsToken"]($) }
                                                                                })($)
                                                                            })
                                                                            break
                                                                        }
                                                                        case "plusEqualsToken": {
                                                                            pl.cc($[1], ($) => {
                                                                                ((
                                                                                    $: api.TNGblock$_statements_expressionStatement$_binaryExpression$_operator_plusEqualsToken$<Annotation>,
                                                                                ) => {
                                                                                    if (foo["$block/*Block/.statements/?expressionStatement/*ExpressionStatement/?binaryExpression/*BinaryExpression/.operator/?plusEqualsToken/*PlusEqualsToken"] !== undefined) { foo["$block/*Block/.statements/?expressionStatement/*ExpressionStatement/?binaryExpression/*BinaryExpression/.operator/?plusEqualsToken/*PlusEqualsToken"]($) }
                                                                                })($)
                                                                            })
                                                                            break
                                                                        }
                                                                        default: pl.au($[0])
                                                                    }
                                                                })
                                                                pl.cc($["initializer"], ($) => {
                                                                    X_initialization($)
                                                                })
                                                            })
                                                            if (foo["$block/*Block/.statements/?expressionStatement/*ExpressionStatement/?binaryExpression/*BinaryExpression"] !== undefined) { foo["$block/*Block/.statements/?expressionStatement/*ExpressionStatement/?binaryExpression/*BinaryExpression"].end($) }
                                                        })($)
                                                    })
                                                    break
                                                }
                                                case "call": {
                                                    pl.cc($[1], ($) => {
                                                        ((
                                                            $: api.TNGblock$_statements_expressionStatement$_call$<Annotation>,
                                                        ) => {
                                                            if (foo["$block/*Block/.statements/?expressionStatement/*ExpressionStatement/?call/*CallExpression"] !== undefined) { foo["$block/*Block/.statements/?expressionStatement/*ExpressionStatement/?call/*CallExpression"].begin($) }
                                                            pl.cc($.content, ($) => {
                                                                pl.cc($["selection"], ($) => {
                                                                    X_selection($)
                                                                })
                                                                pl.cc($["dataArgument"], ($) => {
                                                                    X_initialization($)
                                                                })
                                                                pl.cc($["callbackArgument"], ($) => {
                                                                    if ($ === null) {
                                                                        //FIXME??
                                                                    } else {
                                                                        X_initialization($)
                                                                    }
                                                                })
                                                                pl.cc($["thirdArgument"], ($) => {
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
                                                default: pl.au($[0])
                                            }
                                        })
                                        if (foo["$block/*Block/.statements/?expressionStatement/*ExpressionStatement"] !== undefined) { foo["$block/*Block/.statements/?expressionStatement/*ExpressionStatement"].end($) }
                                    })($)
                                })
                                break
                            }
                            case "ifStatement": {
                                pl.cc($[1], ($) => {
                                    ((
                                        $: api.TNGblock$_statements_ifStatement$<Annotation>,
                                    ) => {
                                        if (foo["$block/*Block/.statements/?ifStatement/*IfStatement"] !== undefined) { foo["$block/*Block/.statements/?ifStatement/*IfStatement"].begin($) }
                                        pl.cc($.content, ($) => {
                                            pl.cc($["expression"], ($) => {
                                                X_booleanExpression($)
                                            })
                                            pl.cc($["then"], ($) => {
                                                X_block($)
                                            })
                                            pl.cc($["else"], ($) => {
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
                            default: pl.au($[0])
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
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGbooleanExpression_binaryExpression$<Annotation>,
                    ) => {
                        if (foo["$booleanExpression/?binaryExpression/*BinaryExpression"] !== undefined) { foo["$booleanExpression/?binaryExpression/*BinaryExpression"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["left"], ($) => {
                                X_identifier($)
                            })
                            pl.cc($["operator"], ($) => {
                                switch ($[0]) {
                                    case "notEqual": {
                                        pl.cc($[1], ($) => {
                                            ((
                                                $: api.TNGbooleanExpression_binaryExpression$_operator_notEqual$<Annotation>,
                                            ) => {
                                                if (foo["$booleanExpression/?binaryExpression/*BinaryExpression/.operator/?notEqual/*ExclamationEqualsEqualsToken"] !== undefined) { foo["$booleanExpression/?binaryExpression/*BinaryExpression/.operator/?notEqual/*ExclamationEqualsEqualsToken"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    default: pl.au($[0])
                                }
                            })
                            pl.cc($["right"], ($) => {
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
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGbooleanExpression_prefixUnaryExpression$<Annotation>,
                    ) => {
                        if (foo["$booleanExpression/?prefixUnaryExpression/*PrefixUnaryExpression"] !== undefined) { foo["$booleanExpression/?prefixUnaryExpression/*PrefixUnaryExpression"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["data"], ($) => {
                                X_initialization($)
                            })
                        })
                        if (foo["$booleanExpression/?prefixUnaryExpression/*PrefixUnaryExpression"] !== undefined) { foo["$booleanExpression/?prefixUnaryExpression/*PrefixUnaryExpression"].end($) }
                    })($)
                })
                break
            }
            default: pl.au($[0])
        }
    }
    function X_callback(
        $: api.TGcallback<Annotation>,
    ) {
        ((
            $: api.TNGcallback$<Annotation>,
        ) => {
            if (foo["$callback/*Parameter"] !== undefined) { foo["$callback/*Parameter"].begin($) }
            pl.cc($.content, ($) => {
                pl.cc($["name"], ($) => {
                    X_identifier($)
                })
                pl.cc($["type"], ($) => {
                    ((
                        $: api.TNGcallback$_type$<Annotation>,
                    ) => {
                        if (foo["$callback/*Parameter/.type/*FunctionType"] !== undefined) { foo["$callback/*Parameter/.type/*FunctionType"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["parameter"], ($) => {
                                ((
                                    $: api.TNGcallback$_type$_parameter$<Annotation>,
                                ) => {
                                    if (foo["$callback/*Parameter/.type/*FunctionType/.parameter/*Parameter"] !== undefined) { foo["$callback/*Parameter/.type/*FunctionType/.parameter/*Parameter"].begin($) }
                                    pl.cc($.content, ($) => {
                                        pl.cc($["name"], ($) => {
                                            X_identifier($)
                                        })
                                        pl.cc($["type"], ($) => {
                                            X_interface($)
                                        })
                                    })
                                    if (foo["$callback/*Parameter/.type/*FunctionType/.parameter/*Parameter"] !== undefined) { foo["$callback/*Parameter/.type/*FunctionType/.parameter/*Parameter"].end($) }
                                })($)
                            })
                            pl.cc($["void"], ($) => {
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
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGinterface_function$<Annotation>,
                    ) => {
                        if (foo["$interface/?function/*FunctionType"] !== undefined) { foo["$interface/?function/*FunctionType"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["dataParameter"], ($) => {
                                ((
                                    $: api.TNGinterface_function$_dataParameter$<Annotation>,
                                ) => {
                                    if (foo["$interface/?function/*FunctionType/.dataParameter/*Parameter"] !== undefined) { foo["$interface/?function/*FunctionType/.dataParameter/*Parameter"].begin($) }
                                    pl.cc($.content, ($) => {
                                        pl.cc($["name"], ($) => {
                                            X_identifier($)
                                        })
                                        pl.cc($["type"], ($) => {
                                            X_type($)
                                        })
                                    })
                                    if (foo["$interface/?function/*FunctionType/.dataParameter/*Parameter"] !== undefined) { foo["$interface/?function/*FunctionType/.dataParameter/*Parameter"].end($) }
                                })($)
                            })
                            pl.cc($["callbackParameter"], ($) => {
                                if ($ === null) {
                                    //FIXME??
                                } else {
                                    X_callback($)
                                }
                            })
                            pl.cc($["void"], ($) => {
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
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGinterface_typeLiteral$<Annotation>,
                    ) => {
                        if (foo["$interface/?typeLiteral/*TypeLiteral"] !== undefined) { foo["$interface/?typeLiteral/*TypeLiteral"].begin($) }
                        pl.cc($.content, ($) => {
                            $.forEach(($) => {
                                ((
                                    $: api.TNGinterface_typeLiteral$$<Annotation>,
                                ) => {
                                    if (foo["$interface/?typeLiteral/*TypeLiteral/*PropertySignature"] !== undefined) { foo["$interface/?typeLiteral/*TypeLiteral/*PropertySignature"].begin($) }
                                    pl.cc($.content, ($) => {
                                        pl.cc($["readonly"], ($) => {
                                            ((
                                                $: api.TNGinterface_typeLiteral$$_readonly$<Annotation>,
                                            ) => {
                                                if (foo["$interface/?typeLiteral/*TypeLiteral/*PropertySignature/.readonly/*ReadonlyKeyword"] !== undefined) { foo["$interface/?typeLiteral/*TypeLiteral/*PropertySignature/.readonly/*ReadonlyKeyword"]($) }
                                            })($)
                                        })
                                        pl.cc($["name"], ($) => {
                                            ((
                                                $: api.TNGinterface_typeLiteral$$_name$<Annotation>,
                                            ) => {
                                                if (foo["$interface/?typeLiteral/*TypeLiteral/*PropertySignature/.name/*StringLiteral"] !== undefined) { foo["$interface/?typeLiteral/*TypeLiteral/*PropertySignature/.name/*StringLiteral"]($) }
                                            })($)
                                        })
                                        pl.cc($["questionToken"], ($) => {
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
                                        pl.cc($["type"], ($) => {
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
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGinterface_typeReference$<Annotation>,
                    ) => {
                        if (foo["$interface/?typeReference/*TypeReference"] !== undefined) { foo["$interface/?typeReference/*TypeReference"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["name"], ($) => {
                                X_identifier($)
                            })
                            pl.cc($["parameters"], ($) => {
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
            default: pl.au($[0])
        }
    }
    function X_initialization(
        $: api.TGinitialization<Annotation>,
    ) {
        switch ($[0]) {
            case "temlateExpression": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGinitialization_temlateExpression$<Annotation>,
                    ) => {
                        if (foo["$initialization/?temlateExpression/*TemplateExpression"] !== undefined) { foo["$initialization/?temlateExpression/*TemplateExpression"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["head"], ($) => {
                                ((
                                    $: api.TNGinitialization_temlateExpression$_head$<Annotation>,
                                ) => {
                                    if (foo["$initialization/?temlateExpression/*TemplateExpression/.head/*TemplateHead"] !== undefined) { foo["$initialization/?temlateExpression/*TemplateExpression/.head/*TemplateHead"]($) }
                                })($)
                            })
                            pl.cc($["span"], ($) => {
                                $.forEach(($) => {
                                    ((
                                        $: api.TNGinitialization_temlateExpression$_span$<Annotation>,
                                    ) => {
                                        if (foo["$initialization/?temlateExpression/*TemplateExpression/.span/*TemplateSpan"] !== undefined) { foo["$initialization/?temlateExpression/*TemplateExpression/.span/*TemplateSpan"].begin($) }
                                        pl.cc($.content, ($) => {
                                            pl.cc($["expression"], ($) => {
                                                X_initialization($)
                                            })
                                            pl.cc($["x"], ($) => {
                                                switch ($[0]) {
                                                    case "middle": {
                                                        pl.cc($[1], ($) => {
                                                            ((
                                                                $: api.TNGinitialization_temlateExpression$_span$_x_middle$<Annotation>,
                                                            ) => {
                                                                if (foo["$initialization/?temlateExpression/*TemplateExpression/.span/*TemplateSpan/.x/?middle/*TemplateMiddle"] !== undefined) { foo["$initialization/?temlateExpression/*TemplateExpression/.span/*TemplateSpan/.x/?middle/*TemplateMiddle"]($) }
                                                            })($)
                                                        })
                                                        break
                                                    }
                                                    case "tail": {
                                                        pl.cc($[1], ($) => {
                                                            ((
                                                                $: api.TNGinitialization_temlateExpression$_span$_x_tail$<Annotation>,
                                                            ) => {
                                                                if (foo["$initialization/?temlateExpression/*TemplateExpression/.span/*TemplateSpan/.x/?tail/*TemplateTail"] !== undefined) { foo["$initialization/?temlateExpression/*TemplateExpression/.span/*TemplateSpan/.x/?tail/*TemplateTail"]($) }
                                                            })($)
                                                        })
                                                        break
                                                    }
                                                    default: pl.au($[0])
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
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGinitialization_binaryExpression$<Annotation>,
                    ) => {
                        if (foo["$initialization/?binaryExpression/*BinaryExpression"] !== undefined) { foo["$initialization/?binaryExpression/*BinaryExpression"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["left"], ($) => {
                                X_selection($)
                            })
                            pl.cc($["operator"], ($) => {
                                switch ($[0]) {
                                    case "PlusToken": {
                                        pl.cc($[1], ($) => {
                                            ((
                                                $: api.TNGinitialization_binaryExpression$_operator_PlusToken$<Annotation>,
                                            ) => {
                                                if (foo["$initialization/?binaryExpression/*BinaryExpression/.operator/?PlusToken/*PlusToken"] !== undefined) { foo["$initialization/?binaryExpression/*BinaryExpression/.operator/?PlusToken/*PlusToken"]($) }
                                            })($)
                                        })
                                        break
                                    }
                                    default: pl.au($[0])
                                }
                            })
                            pl.cc($["right"], ($) => {
                                X_initialization($)
                            })
                        })
                        if (foo["$initialization/?binaryExpression/*BinaryExpression"] !== undefined) { foo["$initialization/?binaryExpression/*BinaryExpression"].end($) }
                    })($)
                })
                break
            }
            case "functionImplementation": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGinitialization_functionImplementation$<Annotation>,
                    ) => {
                        if (foo["$initialization/?functionImplementation/*ArrowFunction"] !== undefined) { foo["$initialization/?functionImplementation/*ArrowFunction"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["dataParameter"], ($) => {
                                if ($ === null) {
                                    //FIXME??
                                } else {
                                    X_typelessParameter($)
                                }
                            })
                            pl.cc($["interfaceParameter"], ($) => {
                                if ($ === null) {
                                    //FIXME??
                                } else {
                                    X_typelessParameter($)
                                }
                            })
                            pl.cc($["callbackParameter"], ($) => {
                                if ($ === null) {
                                    //FIXME??
                                } else {
                                    X_typelessParameter($)
                                }
                            })
                            pl.cc($["equalsGreaterThan"], ($) => {
                                ((
                                    $: api.TNGinitialization_functionImplementation$_equalsGreaterThan$<Annotation>,
                                ) => {
                                    if (foo["$initialization/?functionImplementation/*ArrowFunction/.equalsGreaterThan/*EqualsGreaterThanToken"] !== undefined) { foo["$initialization/?functionImplementation/*ArrowFunction/.equalsGreaterThan/*EqualsGreaterThanToken"]($) }
                                })($)
                            })
                            pl.cc($["block"], ($) => {
                                X_block($)
                            })
                        })
                        if (foo["$initialization/?functionImplementation/*ArrowFunction"] !== undefined) { foo["$initialization/?functionImplementation/*ArrowFunction"].end($) }
                    })($)
                })
                break
            }
            case "literal": {
                pl.cc($[1], ($) => {
                    X_literalDataInitialization($)
                })
                break
            }
            case "objectLiteral": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGinitialization_objectLiteral$<Annotation>,
                    ) => {
                        if (foo["$initialization/?objectLiteral/*ObjectLiteralExpression"] !== undefined) { foo["$initialization/?objectLiteral/*ObjectLiteralExpression"].begin($) }
                        pl.cc($.content, ($) => {
                            $.forEach(($) => {
                                ((
                                    $: api.TNGinitialization_objectLiteral$$<Annotation>,
                                ) => {
                                    if (foo["$initialization/?objectLiteral/*ObjectLiteralExpression/*PropertyAssignment"] !== undefined) { foo["$initialization/?objectLiteral/*ObjectLiteralExpression/*PropertyAssignment"].begin($) }
                                    pl.cc($.content, ($) => {
                                        pl.cc($["name"], ($) => {
                                            ((
                                                $: api.TNGinitialization_objectLiteral$$_name$<Annotation>,
                                            ) => {
                                                if (foo["$initialization/?objectLiteral/*ObjectLiteralExpression/*PropertyAssignment/.name/*StringLiteral"] !== undefined) { foo["$initialization/?objectLiteral/*ObjectLiteralExpression/*PropertyAssignment/.name/*StringLiteral"]($) }
                                            })($)
                                        })
                                        pl.cc($["initialization"], ($) => {
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
                pl.cc($[1], ($) => {
                    X_selection($)
                })
                break
            }
            default: pl.au($[0])
        }
    }
    function X_literalDataInitialization(
        $: api.TGliteralDataInitialization<Annotation>,
    ) {
        switch ($[0]) {
            case "state": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGliteralDataInitialization_state$<Annotation>,
                    ) => {
                        if (foo["$literalDataInitialization/?state/*ArrayLiteralExpression"] !== undefined) { foo["$literalDataInitialization/?state/*ArrayLiteralExpression"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["state"], ($) => {
                                ((
                                    $: api.TNGliteralDataInitialization_state$_state$<Annotation>,
                                ) => {
                                    if (foo["$literalDataInitialization/?state/*ArrayLiteralExpression/.state/*StringLiteral"] !== undefined) { foo["$literalDataInitialization/?state/*ArrayLiteralExpression/.state/*StringLiteral"]($) }
                                })($)
                            })
                            pl.cc($["data"], ($) => {
                                X_initialization($)
                            })
                        })
                        if (foo["$literalDataInitialization/?state/*ArrayLiteralExpression"] !== undefined) { foo["$literalDataInitialization/?state/*ArrayLiteralExpression"].end($) }
                    })($)
                })
                break
            }
            case "false": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGliteralDataInitialization_false$<Annotation>,
                    ) => {
                        if (foo["$literalDataInitialization/?false/*FalseKeyword"] !== undefined) { foo["$literalDataInitialization/?false/*FalseKeyword"]($) }
                    })($)
                })
                break
            }
            case "stringLiteral": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGliteralDataInitialization_stringLiteral$<Annotation>,
                    ) => {
                        if (foo["$literalDataInitialization/?stringLiteral/*NoSubstitutionTemplateLiteral"] !== undefined) { foo["$literalDataInitialization/?stringLiteral/*NoSubstitutionTemplateLiteral"]($) }
                    })($)
                })
                break
            }
            case "numericLiteral": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGliteralDataInitialization_numericLiteral$<Annotation>,
                    ) => {
                        if (foo["$literalDataInitialization/?numericLiteral/*NumericLiteral"] !== undefined) { foo["$literalDataInitialization/?numericLiteral/*NumericLiteral"]($) }
                    })($)
                })
                break
            }
            case "null": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGliteralDataInitialization_null$<Annotation>,
                    ) => {
                        if (foo["$literalDataInitialization/?null/*NullKeyword"] !== undefined) { foo["$literalDataInitialization/?null/*NullKeyword"]($) }
                    })($)
                })
                break
            }
            case "true": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGliteralDataInitialization_true$<Annotation>,
                    ) => {
                        if (foo["$literalDataInitialization/?true/*TrueKeyword"] !== undefined) { foo["$literalDataInitialization/?true/*TrueKeyword"]($) }
                    })($)
                })
                break
            }
            case "array": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGliteralDataInitialization_array$<Annotation>,
                    ) => {
                        if (foo["$literalDataInitialization/?array/*ParenthesizedExpression"] !== undefined) { foo["$literalDataInitialization/?array/*ParenthesizedExpression"].begin($) }
                        pl.cc($.content, ($) => {
                            ((
                                $: api.TNGliteralDataInitialization_array$$<Annotation>,
                            ) => {
                                if (foo["$literalDataInitialization/?array/*ParenthesizedExpression/*ArrayLiteralExpression"] !== undefined) { foo["$literalDataInitialization/?array/*ParenthesizedExpression/*ArrayLiteralExpression"].begin($) }
                                pl.cc($.content, ($) => {
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
            default: pl.au($[0])
        }
    }
    function X_parameterTriplet(
        $: api.TGparameterTriplet<Annotation>,
    ) {
        pl.cc($["dataParameter"], ($) => {
            ((
                $: api.TNGparameterTriplet_dataParameter$<Annotation>,
            ) => {
                if (foo["$parameterTriplet/.dataParameter/*Parameter"] !== undefined) { foo["$parameterTriplet/.dataParameter/*Parameter"].begin($) }
                pl.cc($.content, ($) => {
                    pl.cc($["name"], ($) => {
                        X_identifier($)
                    })
                    pl.cc($["type"], ($) => {
                        X_type($)
                    })
                })
                if (foo["$parameterTriplet/.dataParameter/*Parameter"] !== undefined) { foo["$parameterTriplet/.dataParameter/*Parameter"].end($) }
            })($)
        })
        pl.cc($["interfaceParameter"], ($) => {
            ((
                $: api.TNGparameterTriplet_interfaceParameter$<Annotation>,
            ) => {
                if (foo["$parameterTriplet/.interfaceParameter/*Parameter"] !== undefined) { foo["$parameterTriplet/.interfaceParameter/*Parameter"].begin($) }
                pl.cc($.content, ($) => {
                    pl.cc($["name"], ($) => {
                        X_identifier($)
                    })
                    pl.cc($["interface"], ($) => {
                        X_interface($)
                    })
                })
                if (foo["$parameterTriplet/.interfaceParameter/*Parameter"] !== undefined) { foo["$parameterTriplet/.interfaceParameter/*Parameter"].end($) }
            })($)
        })
        pl.cc($["callbackParameter"], ($) => {
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
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGselection_call$<Annotation>,
                    ) => {
                        if (foo["$selection/?call/*CallExpression"] !== undefined) { foo["$selection/?call/*CallExpression"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["name"], ($) => {
                                X_selection($)
                            })
                            pl.cc($["initialization"], ($) => {
                                X_initialization($)
                            })
                        })
                        if (foo["$selection/?call/*CallExpression"] !== undefined) { foo["$selection/?call/*CallExpression"].end($) }
                    })($)
                })
                break
            }
            case "conditial": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGselection_conditial$<Annotation>,
                    ) => {
                        if (foo["$selection/?conditial/*ConditionalExpression"] !== undefined) { foo["$selection/?conditial/*ConditionalExpression"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["condition"], ($) => {
                                X_selection($)
                            })
                            pl.cc($["questionToken"], ($) => {
                                ((
                                    $: api.TNGselection_conditial$_questionToken$<Annotation>,
                                ) => {
                                    if (foo["$selection/?conditial/*ConditionalExpression/.questionToken/*QuestionToken"] !== undefined) { foo["$selection/?conditial/*ConditionalExpression/.questionToken/*QuestionToken"]($) }
                                })($)
                            })
                            pl.cc($["then"], ($) => {
                                X_initialization($)
                            })
                            pl.cc($["colon"], ($) => {
                                ((
                                    $: api.TNGselection_conditial$_colon$<Annotation>,
                                ) => {
                                    if (foo["$selection/?conditial/*ConditionalExpression/.colon/*ColonToken"] !== undefined) { foo["$selection/?conditial/*ConditionalExpression/.colon/*ColonToken"]($) }
                                })($)
                            })
                            pl.cc($["else"], ($) => {
                                X_initialization($)
                            })
                        })
                        if (foo["$selection/?conditial/*ConditionalExpression"] !== undefined) { foo["$selection/?conditial/*ConditionalExpression"].end($) }
                    })($)
                })
                break
            }
            case "identifier": {
                pl.cc($[1], ($) => {
                    X_identifier($)
                })
                break
            }
            case "propertyAccess": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGselection_propertyAccess$<Annotation>,
                    ) => {
                        if (foo["$selection/?propertyAccess/*PropertyAccessExpression"] !== undefined) { foo["$selection/?propertyAccess/*PropertyAccessExpression"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["first"], ($) => {
                                X_selection($)
                            })
                            pl.cc($["second"], ($) => {
                                X_identifier($)
                            })
                        })
                        if (foo["$selection/?propertyAccess/*PropertyAccessExpression"] !== undefined) { foo["$selection/?propertyAccess/*PropertyAccessExpression"].end($) }
                    })($)
                })
                break
            }
            default: pl.au($[0])
        }
    }
    function X_type(
        $: api.TGtype<Annotation>,
    ) {
        switch ($[0]) {
            case "array": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_array$<Annotation>,
                    ) => {
                        if (foo["$type/?array/*ArrayType"] !== undefined) { foo["$type/?array/*ArrayType"].begin($) }
                        pl.cc($.content, ($) => {
                            X_type($)
                        })
                        if (foo["$type/?array/*ArrayType"] !== undefined) { foo["$type/?array/*ArrayType"].end($) }
                    })($)
                })
                break
            }
            case "boolean": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_boolean$<Annotation>,
                    ) => {
                        if (foo["$type/?boolean/*BooleanKeyword"] !== undefined) { foo["$type/?boolean/*BooleanKeyword"]($) }
                    })($)
                })
                break
            }
            case "string": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_string$<Annotation>,
                    ) => {
                        if (foo["$type/?string/*StringKeyword"] !== undefined) { foo["$type/?string/*StringKeyword"]($) }
                    })($)
                })
                break
            }
            case "number": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_number$<Annotation>,
                    ) => {
                        if (foo["$type/?number/*NumberKeyword"] !== undefined) { foo["$type/?number/*NumberKeyword"]($) }
                    })($)
                })
                break
            }
            case "literalType": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_literalType$<Annotation>,
                    ) => {
                        if (foo["$type/?literalType/*LiteralType"] !== undefined) { foo["$type/?literalType/*LiteralType"].begin($) }
                        pl.cc($.content, ($) => {
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
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_typeLiteral$<Annotation>,
                    ) => {
                        if (foo["$type/?typeLiteral/*TypeLiteral"] !== undefined) { foo["$type/?typeLiteral/*TypeLiteral"].begin($) }
                        pl.cc($.content, ($) => {
                            if ($ === null) {
                                //FIXME??
                            } else {
                                switch ($[0]) {
                                    case "index": {
                                        pl.cc($[1], ($) => {
                                            ((
                                                $: api.TNGtype_typeLiteral$_index$<Annotation>,
                                            ) => {
                                                if (foo["$type/?typeLiteral/*TypeLiteral/?index/*IndexSignature"] !== undefined) { foo["$type/?typeLiteral/*TypeLiteral/?index/*IndexSignature"].begin($) }
                                                pl.cc($.content, ($) => {
                                                    pl.cc($["key"], ($) => {
                                                        ((
                                                            $: api.TNGtype_typeLiteral$_index$_key$<Annotation>,
                                                        ) => {
                                                            if (foo["$type/?typeLiteral/*TypeLiteral/?index/*IndexSignature/.key/*Parameter"] !== undefined) { foo["$type/?typeLiteral/*TypeLiteral/?index/*IndexSignature/.key/*Parameter"].begin($) }
                                                            pl.cc($.content, ($) => {
                                                                pl.cc($["name"], ($) => {
                                                                    X_identifier($)
                                                                })
                                                                pl.cc($["type"], ($) => {
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
                                                    pl.cc($["type"], ($) => {
                                                        X_type($)
                                                    })
                                                })
                                                if (foo["$type/?typeLiteral/*TypeLiteral/?index/*IndexSignature"] !== undefined) { foo["$type/?typeLiteral/*TypeLiteral/?index/*IndexSignature"].end($) }
                                            })($)
                                        })
                                        break
                                    }
                                    case "properties": {
                                        pl.cc($[1], ($) => {
                                            $.forEach(($) => {
                                                ((
                                                    $: api.TNGtype_typeLiteral$_properties$<Annotation>,
                                                ) => {
                                                    if (foo["$type/?typeLiteral/*TypeLiteral/?properties/*PropertySignature"] !== undefined) { foo["$type/?typeLiteral/*TypeLiteral/?properties/*PropertySignature"].begin($) }
                                                    pl.cc($.content, ($) => {
                                                        pl.cc($["readonly"], ($) => {
                                                            ((
                                                                $: api.TNGtype_typeLiteral$_properties$_readonly$<Annotation>,
                                                            ) => {
                                                                if (foo["$type/?typeLiteral/*TypeLiteral/?properties/*PropertySignature/.readonly/*ReadonlyKeyword"] !== undefined) { foo["$type/?typeLiteral/*TypeLiteral/?properties/*PropertySignature/.readonly/*ReadonlyKeyword"]($) }
                                                            })($)
                                                        })
                                                        pl.cc($["name"], ($) => {
                                                            ((
                                                                $: api.TNGtype_typeLiteral$_properties$_name$<Annotation>,
                                                            ) => {
                                                                if (foo["$type/?typeLiteral/*TypeLiteral/?properties/*PropertySignature/.name/*StringLiteral"] !== undefined) { foo["$type/?typeLiteral/*TypeLiteral/?properties/*PropertySignature/.name/*StringLiteral"]($) }
                                                            })($)
                                                        })
                                                        pl.cc($["questionToken"], ($) => {
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
                                                        pl.cc($["type"], ($) => {
                                                            X_type($)
                                                        })
                                                    })
                                                    if (foo["$type/?typeLiteral/*TypeLiteral/?properties/*PropertySignature"] !== undefined) { foo["$type/?typeLiteral/*TypeLiteral/?properties/*PropertySignature"].end($) }
                                                })($)
                                            })
                                        })
                                        break
                                    }
                                    default: pl.au($[0])
                                }
                            }
                        })
                        if (foo["$type/?typeLiteral/*TypeLiteral"] !== undefined) { foo["$type/?typeLiteral/*TypeLiteral"].end($) }
                    })($)
                })
                break
            }
            case "typeReference": {
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_typeReference$<Annotation>,
                    ) => {
                        if (foo["$type/?typeReference/*TypeReference"] !== undefined) { foo["$type/?typeReference/*TypeReference"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["referencedType"], ($) => {
                                switch ($[0]) {
                                    case "identifier": {
                                        pl.cc($[1], ($) => {
                                            X_identifier($)
                                        })
                                        break
                                    }
                                    case "qualifiedName": {
                                        pl.cc($[1], ($) => {
                                            ((
                                                $: api.TNGtype_typeReference$_referencedType_qualifiedName$<Annotation>,
                                            ) => {
                                                if (foo["$type/?typeReference/*TypeReference/.referencedType/?qualifiedName/*QualifiedName"] !== undefined) { foo["$type/?typeReference/*TypeReference/.referencedType/?qualifiedName/*QualifiedName"].begin($) }
                                                pl.cc($.content, ($) => {
                                                    pl.cc($["context"], ($) => {
                                                        X_identifier($)
                                                    })
                                                    pl.cc($["type"], ($) => {
                                                        X_identifier($)
                                                    })
                                                })
                                                if (foo["$type/?typeReference/*TypeReference/.referencedType/?qualifiedName/*QualifiedName"] !== undefined) { foo["$type/?typeReference/*TypeReference/.referencedType/?qualifiedName/*QualifiedName"].end($) }
                                            })($)
                                        })
                                        break
                                    }
                                    default: pl.au($[0])
                                }
                            })
                            pl.cc($["typeArguments"], ($) => {
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
                pl.cc($[1], ($) => {
                    ((
                        $: api.TNGtype_union$<Annotation>,
                    ) => {
                        if (foo["$type/?union/*UnionType"] !== undefined) { foo["$type/?union/*UnionType"].begin($) }
                        pl.cc($.content, ($) => {
                            $.forEach(($) => {
                                ((
                                    $: api.TNGtype_union$$<Annotation>,
                                ) => {
                                    if (foo["$type/?union/*UnionType/*TupleType"] !== undefined) { foo["$type/?union/*UnionType/*TupleType"].begin($) }
                                    pl.cc($.content, ($) => {
                                        pl.cc($["state"], ($) => {
                                            ((
                                                $: api.TNGtype_union$$_state$<Annotation>,
                                            ) => {
                                                if (foo["$type/?union/*UnionType/*TupleType/.state/*LiteralType"] !== undefined) { foo["$type/?union/*UnionType/*TupleType/.state/*LiteralType"].begin($) }
                                                pl.cc($.content, ($) => {
                                                    ((
                                                        $: api.TNGtype_union$$_state$$<Annotation>,
                                                    ) => {
                                                        if (foo["$type/?union/*UnionType/*TupleType/.state/*LiteralType/*StringLiteral"] !== undefined) { foo["$type/?union/*UnionType/*TupleType/.state/*LiteralType/*StringLiteral"]($) }
                                                    })($)
                                                })
                                                if (foo["$type/?union/*UnionType/*TupleType/.state/*LiteralType"] !== undefined) { foo["$type/?union/*UnionType/*TupleType/.state/*LiteralType"].end($) }
                                            })($)
                                        })
                                        pl.cc($["data"], ($) => {
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
            default: pl.au($[0])
        }
    }
    function X_typelessParameter(
        $: api.TGtypelessParameter<Annotation>,
    ) {
        ((
            $: api.TNGtypelessParameter$<Annotation>,
        ) => {
            if (foo["$typelessParameter/*Parameter"] !== undefined) { foo["$typelessParameter/*Parameter"].begin($) }
            pl.cc($.content, ($) => {
                X_identifier($)
            })
            if (foo["$typelessParameter/*Parameter"] !== undefined) { foo["$typelessParameter/*Parameter"].end($) }
        })($)
    }
    ((
        $: api.TNroot<Annotation>,
    ) => {
        if (foo[""] !== undefined) { foo[""].begin($) }
        pl.cc($.content, ($) => {
            pl.cc($["imports"], ($) => {
                $.forEach(($) => {
                    ((
                        $: api.TNroot_imports$<Annotation>,
                    ) => {
                        if (foo["/.imports/*ImportDeclaration"] !== undefined) { foo["/.imports/*ImportDeclaration"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["clause"], ($) => {
                                ((
                                    $: api.TNroot_imports$_clause$<Annotation>,
                                ) => {
                                    if (foo["/.imports/*ImportDeclaration/.clause/*ImportClause"] !== undefined) { foo["/.imports/*ImportDeclaration/.clause/*ImportClause"].begin($) }
                                    pl.cc($.content, ($) => {
                                        switch ($[0]) {
                                            case "namespace": {
                                                pl.cc($[1], ($) => {
                                                    ((
                                                        $: api.TNroot_imports$_clause$_namespace$<Annotation>,
                                                    ) => {
                                                        if (foo["/.imports/*ImportDeclaration/.clause/*ImportClause/?namespace/*NamespaceImport"] !== undefined) { foo["/.imports/*ImportDeclaration/.clause/*ImportClause/?namespace/*NamespaceImport"].begin($) }
                                                        pl.cc($.content, ($) => {
                                                            X_identifier($)
                                                        })
                                                        if (foo["/.imports/*ImportDeclaration/.clause/*ImportClause/?namespace/*NamespaceImport"] !== undefined) { foo["/.imports/*ImportDeclaration/.clause/*ImportClause/?namespace/*NamespaceImport"].end($) }
                                                    })($)
                                                })
                                                break
                                            }
                                            case "named": {
                                                pl.cc($[1], ($) => {
                                                    ((
                                                        $: api.TNroot_imports$_clause$_named$<Annotation>,
                                                    ) => {
                                                        if (foo["/.imports/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports"] !== undefined) { foo["/.imports/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports"].begin($) }
                                                        pl.cc($.content, ($) => {
                                                            $.forEach(($) => {
                                                                ((
                                                                    $: api.TNroot_imports$_clause$_named$$<Annotation>,
                                                                ) => {
                                                                    if (foo["/.imports/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports/*ImportSpecifier"] !== undefined) { foo["/.imports/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports/*ImportSpecifier"].begin($) }
                                                                    pl.cc($.content, ($) => {
                                                                        pl.cc($["name"], ($) => {
                                                                            X_identifier($)
                                                                        })
                                                                        pl.cc($["as"], ($) => {
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
                                            default: pl.au($[0])
                                        }
                                    })
                                    if (foo["/.imports/*ImportDeclaration/.clause/*ImportClause"] !== undefined) { foo["/.imports/*ImportDeclaration/.clause/*ImportClause"].end($) }
                                })($)
                            })
                            pl.cc($["file"], ($) => {
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
            pl.cc($["procedures"], ($) => {
                $.forEach(($) => {
                    ((
                        $: api.TNroot_procedures$<Annotation>,
                    ) => {
                        if (foo["/.procedures/*FunctionDeclaration"] !== undefined) { foo["/.procedures/*FunctionDeclaration"].begin($) }
                        pl.cc($.content, ($) => {
                            pl.cc($["export"], ($) => {
                                ((
                                    $: api.TNroot_procedures$_export$<Annotation>,
                                ) => {
                                    if (foo["/.procedures/*FunctionDeclaration/.export/*ExportKeyword"] !== undefined) { foo["/.procedures/*FunctionDeclaration/.export/*ExportKeyword"]($) }
                                })($)
                            })
                            pl.cc($["name"], ($) => {
                                X_identifier($)
                            })
                            pl.cc($["typeParameters"], ($) => {
                                $.forEach(($) => {
                                    ((
                                        $: api.TNroot_procedures$_typeParameters$<Annotation>,
                                    ) => {
                                        if (foo["/.procedures/*FunctionDeclaration/.typeParameters/*TypeParameter"] !== undefined) { foo["/.procedures/*FunctionDeclaration/.typeParameters/*TypeParameter"].begin($) }
                                        pl.cc($.content, ($) => {
                                            X_identifier($)
                                        })
                                        if (foo["/.procedures/*FunctionDeclaration/.typeParameters/*TypeParameter"] !== undefined) { foo["/.procedures/*FunctionDeclaration/.typeParameters/*TypeParameter"].end($) }
                                    })($)
                                })
                            })
                            pl.cc($["parameters"], ($) => {
                                $.forEach(($) => {
                                    ((
                                        $: api.TNroot_procedures$_parameters$<Annotation>,
                                    ) => {
                                        if (foo["/.procedures/*FunctionDeclaration/.parameters/*Parameter"] !== undefined) { foo["/.procedures/*FunctionDeclaration/.parameters/*Parameter"].begin($) }
                                        pl.cc($.content, ($) => {
                                            pl.cc($["name"], ($) => {
                                                X_identifier($)
                                            })
                                            pl.cc($["type"], ($) => {
                                                switch ($[0]) {
                                                    case "func": {
                                                        pl.cc($[1], ($) => {
                                                            ((
                                                                $: api.TNroot_procedures$_parameters$_type_func$<Annotation>,
                                                            ) => {
                                                                if (foo["/.procedures/*FunctionDeclaration/.parameters/*Parameter/.type/?func/*FunctionType"] !== undefined) { foo["/.procedures/*FunctionDeclaration/.parameters/*Parameter/.type/?func/*FunctionType"].begin($) }
                                                                pl.cc($.content, ($) => {
                                                                    pl.cc($["parameters"], ($) => {
                                                                        ((
                                                                            $: api.TNroot_procedures$_parameters$_type_func$_parameters$<Annotation>,
                                                                        ) => {
                                                                            if (foo["/.procedures/*FunctionDeclaration/.parameters/*Parameter/.type/?func/*FunctionType/.parameters/*Parameter"] !== undefined) { foo["/.procedures/*FunctionDeclaration/.parameters/*Parameter/.type/?func/*FunctionType/.parameters/*Parameter"].begin($) }
                                                                            pl.cc($.content, ($) => {
                                                                                pl.cc($["name"], ($) => {
                                                                                    X_identifier($)
                                                                                })
                                                                                pl.cc($["type"], ($) => {
                                                                                    X_type($)
                                                                                })
                                                                            })
                                                                            if (foo["/.procedures/*FunctionDeclaration/.parameters/*Parameter/.type/?func/*FunctionType/.parameters/*Parameter"] !== undefined) { foo["/.procedures/*FunctionDeclaration/.parameters/*Parameter/.type/?func/*FunctionType/.parameters/*Parameter"].end($) }
                                                                        })($)
                                                                    })
                                                                    pl.cc($["returnType"], ($) => {
                                                                        X_type($)
                                                                    })
                                                                })
                                                                if (foo["/.procedures/*FunctionDeclaration/.parameters/*Parameter/.type/?func/*FunctionType"] !== undefined) { foo["/.procedures/*FunctionDeclaration/.parameters/*Parameter/.type/?func/*FunctionType"].end($) }
                                                            })($)
                                                        })
                                                        break
                                                    }
                                                    case "typeReference": {
                                                        pl.cc($[1], ($) => {
                                                            ((
                                                                $: api.TNroot_procedures$_parameters$_type_typeReference$<Annotation>,
                                                            ) => {
                                                                if (foo["/.procedures/*FunctionDeclaration/.parameters/*Parameter/.type/?typeReference/*TypeReference"] !== undefined) { foo["/.procedures/*FunctionDeclaration/.parameters/*Parameter/.type/?typeReference/*TypeReference"].begin($) }
                                                                pl.cc($.content, ($) => {
                                                                    pl.cc($["name"], ($) => {
                                                                        ((
                                                                            $: api.TNroot_procedures$_parameters$_type_typeReference$_name$<Annotation>,
                                                                        ) => {
                                                                            if (foo["/.procedures/*FunctionDeclaration/.parameters/*Parameter/.type/?typeReference/*TypeReference/.name/*QualifiedName"] !== undefined) { foo["/.procedures/*FunctionDeclaration/.parameters/*Parameter/.type/?typeReference/*TypeReference/.name/*QualifiedName"].begin($) }
                                                                            pl.cc($.content, ($) => {
                                                                                pl.cc($["context"], ($) => {
                                                                                    ((
                                                                                        $: api.TNroot_procedures$_parameters$_type_typeReference$_name$_context$<Annotation>,
                                                                                    ) => {
                                                                                        if (foo["/.procedures/*FunctionDeclaration/.parameters/*Parameter/.type/?typeReference/*TypeReference/.name/*QualifiedName/.context/*Identifier"] !== undefined) { foo["/.procedures/*FunctionDeclaration/.parameters/*Parameter/.type/?typeReference/*TypeReference/.name/*QualifiedName/.context/*Identifier"]($) }
                                                                                    })($)
                                                                                })
                                                                                pl.cc($["type"], ($) => {
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
                                                    default: pl.au($[0])
                                                }
                                            })
                                        })
                                        if (foo["/.procedures/*FunctionDeclaration/.parameters/*Parameter"] !== undefined) { foo["/.procedures/*FunctionDeclaration/.parameters/*Parameter"].end($) }
                                    })($)
                                })
                            })
                            pl.cc($["returnType"], ($) => {
                                ((
                                    $: api.TNroot_procedures$_returnType$<Annotation>,
                                ) => {
                                    if (foo["/.procedures/*FunctionDeclaration/.returnType/*TypeReference"] !== undefined) { foo["/.procedures/*FunctionDeclaration/.returnType/*TypeReference"].begin($) }
                                    pl.cc($.content, ($) => {
                                        pl.cc($["referencedType"], ($) => {
                                            switch ($[0]) {
                                                case "identifier": {
                                                    pl.cc($[1], ($) => {
                                                        X_identifier($)
                                                    })
                                                    break
                                                }
                                                case "qualifiedName": {
                                                    pl.cc($[1], ($) => {
                                                        ((
                                                            $: api.TNroot_procedures$_returnType$_referencedType_qualifiedName$<Annotation>,
                                                        ) => {
                                                            if (foo["/.procedures/*FunctionDeclaration/.returnType/*TypeReference/.referencedType/?qualifiedName/*QualifiedName"] !== undefined) { foo["/.procedures/*FunctionDeclaration/.returnType/*TypeReference/.referencedType/?qualifiedName/*QualifiedName"].begin($) }
                                                            pl.cc($.content, ($) => {
                                                                pl.cc($["context"], ($) => {
                                                                    X_identifier($)
                                                                })
                                                                pl.cc($["type"], ($) => {
                                                                    X_identifier($)
                                                                })
                                                            })
                                                            if (foo["/.procedures/*FunctionDeclaration/.returnType/*TypeReference/.referencedType/?qualifiedName/*QualifiedName"] !== undefined) { foo["/.procedures/*FunctionDeclaration/.returnType/*TypeReference/.referencedType/?qualifiedName/*QualifiedName"].end($) }
                                                        })($)
                                                    })
                                                    break
                                                }
                                                default: pl.au($[0])
                                            }
                                        })
                                        pl.cc($["typeArguments"], ($) => {
                                            $.forEach(($) => {
                                                X_type($)
                                            })
                                        })
                                    })
                                    if (foo["/.procedures/*FunctionDeclaration/.returnType/*TypeReference"] !== undefined) { foo["/.procedures/*FunctionDeclaration/.returnType/*TypeReference"].end($) }
                                })($)
                            })
                            pl.cc($["block"], ($) => {
                                ((
                                    $: api.TNroot_procedures$_block$<Annotation>,
                                ) => {
                                    if (foo["/.procedures/*FunctionDeclaration/.block/*Block"] !== undefined) { foo["/.procedures/*FunctionDeclaration/.block/*Block"].begin($) }
                                    pl.cc($.content, ($) => {
                                        pl.cc($["returnStatement"], ($) => {
                                            ((
                                                $: api.TNroot_procedures$_block$_returnStatement$<Annotation>,
                                            ) => {
                                                if (foo["/.procedures/*FunctionDeclaration/.block/*Block/.returnStatement/*ReturnStatement"] !== undefined) { foo["/.procedures/*FunctionDeclaration/.block/*Block/.returnStatement/*ReturnStatement"].begin($) }
                                                pl.cc($.content, ($) => {
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
            pl.cc($["endOfFile"], ($) => {
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