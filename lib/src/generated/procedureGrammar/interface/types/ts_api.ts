import * as pl from "pareto-lang-lib"
import * as pa from "pareto-lang-api"

export type TAnnotatedString<Annotation> = { readonly "annotation": Annotation; readonly "value": string }
export type TAnnotatedType<Annotation, Type> = { readonly "annotation": Annotation; readonly "content": Type }
export type TVTGblock$_variables$$$_name<Annotation> = TGidentifier<Annotation>
export type TVGblock$_variables$$$_name<Annotation> = TVTGblock$_variables$$$_name<Annotation>
export type TVTGblock$_variables$$$_type<Annotation> = TGtype<Annotation>
export type TVGblock$_variables$$$_type<Annotation> = pa.optional<TVTGblock$_variables$$$_type<Annotation>>
export type TVTGblock$_variables$$$_initialization<Annotation> = TGinitialization<Annotation>
export type TVGblock$_variables$$$_initialization<Annotation> = TVTGblock$_variables$$$_initialization<Annotation>
export type TVTGblock$_variables$$$<Annotation> = {
    readonly "name":  TVGblock$_variables$$$_name<Annotation>
    readonly "type":  TVGblock$_variables$$$_type<Annotation>
    readonly "initialization":  TVGblock$_variables$$$_initialization<Annotation>
}
export type TVGblock$_variables$$$<Annotation> = TVTGblock$_variables$$$<Annotation>

export type TNGblock$_variables$$$<Annotation> = TAnnotatedType<Annotation, TVGblock$_variables$$$<Annotation>>
export type TVTGblock$_variables$$<Annotation> = TNGblock$_variables$$$<Annotation>
export type TVGblock$_variables$$<Annotation> = TVTGblock$_variables$$<Annotation>

export type TNGblock$_variables$$<Annotation> = TAnnotatedType<Annotation, TVGblock$_variables$$<Annotation>>
export type TVTGblock$_variables$<Annotation> = TNGblock$_variables$$<Annotation>
export type TVGblock$_variables$<Annotation> = TVTGblock$_variables$<Annotation>

export type TNGblock$_variables$<Annotation> = TAnnotatedType<Annotation, TVGblock$_variables$<Annotation>>
export type TVTGblock$_variables<Annotation> = TNGblock$_variables$<Annotation>
export type TVGblock$_variables<Annotation> = TVTGblock$_variables<Annotation>[]
export type TVTGblock$_nestedProcedures$_name<Annotation> = TGidentifier<Annotation>
export type TVGblock$_nestedProcedures$_name<Annotation> = TVTGblock$_nestedProcedures$_name<Annotation>
export type TVTGblock$_nestedProcedures$_parameters<Annotation> = TGparameterTriplet<Annotation>
export type TVGblock$_nestedProcedures$_parameters<Annotation> = TVTGblock$_nestedProcedures$_parameters<Annotation>

export type TNGblock$_nestedProcedures$_void$<Annotation> = Annotation
export type TVTGblock$_nestedProcedures$_void<Annotation> = TNGblock$_nestedProcedures$_void$<Annotation>
export type TVGblock$_nestedProcedures$_void<Annotation> = TVTGblock$_nestedProcedures$_void<Annotation>
export type TVTGblock$_nestedProcedures$_block<Annotation> = TGblock<Annotation>
export type TVGblock$_nestedProcedures$_block<Annotation> = TVTGblock$_nestedProcedures$_block<Annotation>
export type TVTGblock$_nestedProcedures$<Annotation> = {
    readonly "name":  TVGblock$_nestedProcedures$_name<Annotation>
    readonly "parameters":  TVGblock$_nestedProcedures$_parameters<Annotation>
    readonly "void":  TVGblock$_nestedProcedures$_void<Annotation>
    readonly "block":  TVGblock$_nestedProcedures$_block<Annotation>
}
export type TVGblock$_nestedProcedures$<Annotation> = TVTGblock$_nestedProcedures$<Annotation>

export type TNGblock$_nestedProcedures$<Annotation> = TAnnotatedType<Annotation, TVGblock$_nestedProcedures$<Annotation>>
export type TVTGblock$_nestedProcedures<Annotation> = TNGblock$_nestedProcedures$<Annotation>
export type TVGblock$_nestedProcedures<Annotation> = TVTGblock$_nestedProcedures<Annotation>[]
export type TVTGblock$_statements_expressionStatement$_binaryExpression$_referencedVariable<Annotation> = TGidentifier<Annotation>
export type TVGblock$_statements_expressionStatement$_binaryExpression$_referencedVariable<Annotation> = TVTGblock$_statements_expressionStatement$_binaryExpression$_referencedVariable<Annotation>

export type TNGblock$_statements_expressionStatement$_binaryExpression$_operator_equalsToken$<Annotation> = Annotation
export type TVTGblock$_statements_expressionStatement$_binaryExpression$_operator_equalsToken<Annotation> = TNGblock$_statements_expressionStatement$_binaryExpression$_operator_equalsToken$<Annotation>
export type TVGblock$_statements_expressionStatement$_binaryExpression$_operator_equalsToken<Annotation> = TVTGblock$_statements_expressionStatement$_binaryExpression$_operator_equalsToken<Annotation>

export type TNGblock$_statements_expressionStatement$_binaryExpression$_operator_plusEqualsToken$<Annotation> = Annotation
export type TVTGblock$_statements_expressionStatement$_binaryExpression$_operator_plusEqualsToken<Annotation> = TNGblock$_statements_expressionStatement$_binaryExpression$_operator_plusEqualsToken$<Annotation>
export type TVGblock$_statements_expressionStatement$_binaryExpression$_operator_plusEqualsToken<Annotation> = TVTGblock$_statements_expressionStatement$_binaryExpression$_operator_plusEqualsToken<Annotation>
export type TVTGblock$_statements_expressionStatement$_binaryExpression$_operator<Annotation> =
    | [ "equalsToken", TVGblock$_statements_expressionStatement$_binaryExpression$_operator_equalsToken<Annotation>]
    | [ "plusEqualsToken", TVGblock$_statements_expressionStatement$_binaryExpression$_operator_plusEqualsToken<Annotation>]
export type TVGblock$_statements_expressionStatement$_binaryExpression$_operator<Annotation> = TVTGblock$_statements_expressionStatement$_binaryExpression$_operator<Annotation>
export type TVTGblock$_statements_expressionStatement$_binaryExpression$_initializer<Annotation> = TGinitialization<Annotation>
export type TVGblock$_statements_expressionStatement$_binaryExpression$_initializer<Annotation> = TVTGblock$_statements_expressionStatement$_binaryExpression$_initializer<Annotation>
export type TVTGblock$_statements_expressionStatement$_binaryExpression$<Annotation> = {
    readonly "referencedVariable":  TVGblock$_statements_expressionStatement$_binaryExpression$_referencedVariable<Annotation>
    readonly "operator":  TVGblock$_statements_expressionStatement$_binaryExpression$_operator<Annotation>
    readonly "initializer":  TVGblock$_statements_expressionStatement$_binaryExpression$_initializer<Annotation>
}
export type TVGblock$_statements_expressionStatement$_binaryExpression$<Annotation> = TVTGblock$_statements_expressionStatement$_binaryExpression$<Annotation>

export type TNGblock$_statements_expressionStatement$_binaryExpression$<Annotation> = TAnnotatedType<Annotation, TVGblock$_statements_expressionStatement$_binaryExpression$<Annotation>>
export type TVTGblock$_statements_expressionStatement$_binaryExpression<Annotation> = TNGblock$_statements_expressionStatement$_binaryExpression$<Annotation>
export type TVGblock$_statements_expressionStatement$_binaryExpression<Annotation> = TVTGblock$_statements_expressionStatement$_binaryExpression<Annotation>
export type TVTGblock$_statements_expressionStatement$_call$_selection<Annotation> = TGselection<Annotation>
export type TVGblock$_statements_expressionStatement$_call$_selection<Annotation> = TVTGblock$_statements_expressionStatement$_call$_selection<Annotation>
export type TVTGblock$_statements_expressionStatement$_call$_dataArgument<Annotation> = TGinitialization<Annotation>
export type TVGblock$_statements_expressionStatement$_call$_dataArgument<Annotation> = TVTGblock$_statements_expressionStatement$_call$_dataArgument<Annotation>
export type TVTGblock$_statements_expressionStatement$_call$_callbackArgument<Annotation> = TGinitialization<Annotation>
export type TVGblock$_statements_expressionStatement$_call$_callbackArgument<Annotation> = pa.optional<TVTGblock$_statements_expressionStatement$_call$_callbackArgument<Annotation>>
export type TVTGblock$_statements_expressionStatement$_call$_thirdArgument<Annotation> = TGinitialization<Annotation>
export type TVGblock$_statements_expressionStatement$_call$_thirdArgument<Annotation> = pa.optional<TVTGblock$_statements_expressionStatement$_call$_thirdArgument<Annotation>>
export type TVTGblock$_statements_expressionStatement$_call$<Annotation> = {
    readonly "selection":  TVGblock$_statements_expressionStatement$_call$_selection<Annotation>
    readonly "dataArgument":  TVGblock$_statements_expressionStatement$_call$_dataArgument<Annotation>
    readonly "callbackArgument":  TVGblock$_statements_expressionStatement$_call$_callbackArgument<Annotation>
    readonly "thirdArgument":  TVGblock$_statements_expressionStatement$_call$_thirdArgument<Annotation>
}
export type TVGblock$_statements_expressionStatement$_call$<Annotation> = TVTGblock$_statements_expressionStatement$_call$<Annotation>

export type TNGblock$_statements_expressionStatement$_call$<Annotation> = TAnnotatedType<Annotation, TVGblock$_statements_expressionStatement$_call$<Annotation>>
export type TVTGblock$_statements_expressionStatement$_call<Annotation> = TNGblock$_statements_expressionStatement$_call$<Annotation>
export type TVGblock$_statements_expressionStatement$_call<Annotation> = TVTGblock$_statements_expressionStatement$_call<Annotation>
export type TVTGblock$_statements_expressionStatement$<Annotation> =
    | [ "binaryExpression", TVGblock$_statements_expressionStatement$_binaryExpression<Annotation>]
    | [ "call", TVGblock$_statements_expressionStatement$_call<Annotation>]
export type TVGblock$_statements_expressionStatement$<Annotation> = TVTGblock$_statements_expressionStatement$<Annotation>

export type TNGblock$_statements_expressionStatement$<Annotation> = TAnnotatedType<Annotation, TVGblock$_statements_expressionStatement$<Annotation>>
export type TVTGblock$_statements_expressionStatement<Annotation> = TNGblock$_statements_expressionStatement$<Annotation>
export type TVGblock$_statements_expressionStatement<Annotation> = TVTGblock$_statements_expressionStatement<Annotation>
export type TVTGblock$_statements_ifStatement$_expression<Annotation> = TGbooleanExpression<Annotation>
export type TVGblock$_statements_ifStatement$_expression<Annotation> = TVTGblock$_statements_ifStatement$_expression<Annotation>
export type TVTGblock$_statements_ifStatement$_then<Annotation> = TGblock<Annotation>
export type TVGblock$_statements_ifStatement$_then<Annotation> = TVTGblock$_statements_ifStatement$_then<Annotation>
export type TVTGblock$_statements_ifStatement$_else<Annotation> = TGblock<Annotation>
export type TVGblock$_statements_ifStatement$_else<Annotation> = pa.optional<TVTGblock$_statements_ifStatement$_else<Annotation>>
export type TVTGblock$_statements_ifStatement$<Annotation> = {
    readonly "expression":  TVGblock$_statements_ifStatement$_expression<Annotation>
    readonly "then":  TVGblock$_statements_ifStatement$_then<Annotation>
    readonly "else":  TVGblock$_statements_ifStatement$_else<Annotation>
}
export type TVGblock$_statements_ifStatement$<Annotation> = TVTGblock$_statements_ifStatement$<Annotation>

export type TNGblock$_statements_ifStatement$<Annotation> = TAnnotatedType<Annotation, TVGblock$_statements_ifStatement$<Annotation>>
export type TVTGblock$_statements_ifStatement<Annotation> = TNGblock$_statements_ifStatement$<Annotation>
export type TVGblock$_statements_ifStatement<Annotation> = TVTGblock$_statements_ifStatement<Annotation>
export type TVTGblock$_statements<Annotation> =
    | [ "expressionStatement", TVGblock$_statements_expressionStatement<Annotation>]
    | [ "ifStatement", TVGblock$_statements_ifStatement<Annotation>]
export type TVGblock$_statements<Annotation> = TVTGblock$_statements<Annotation>[]
export type TVTGblock$<Annotation> = {
    readonly "variables":  TVGblock$_variables<Annotation>
    readonly "nestedProcedures":  TVGblock$_nestedProcedures<Annotation>
    readonly "statements":  TVGblock$_statements<Annotation>
}
export type TVGblock$<Annotation> = TVTGblock$<Annotation>

export type TNGblock$<Annotation> = TAnnotatedType<Annotation, TVGblock$<Annotation>>
export type TVTGblock<Annotation> = TNGblock$<Annotation>
export type TGblock<Annotation> =  TVTGblock<Annotation>
export type TVTGbooleanExpression_binaryExpression$_left<Annotation> = TGidentifier<Annotation>
export type TVGbooleanExpression_binaryExpression$_left<Annotation> = TVTGbooleanExpression_binaryExpression$_left<Annotation>

export type TNGbooleanExpression_binaryExpression$_operator_notEqual$<Annotation> = Annotation
export type TVTGbooleanExpression_binaryExpression$_operator_notEqual<Annotation> = TNGbooleanExpression_binaryExpression$_operator_notEqual$<Annotation>
export type TVGbooleanExpression_binaryExpression$_operator_notEqual<Annotation> = TVTGbooleanExpression_binaryExpression$_operator_notEqual<Annotation>
export type TVTGbooleanExpression_binaryExpression$_operator<Annotation> =
    | [ "notEqual", TVGbooleanExpression_binaryExpression$_operator_notEqual<Annotation>]
export type TVGbooleanExpression_binaryExpression$_operator<Annotation> = TVTGbooleanExpression_binaryExpression$_operator<Annotation>

export type TNGbooleanExpression_binaryExpression$_right$<Annotation> = Annotation
export type TVTGbooleanExpression_binaryExpression$_right<Annotation> = TNGbooleanExpression_binaryExpression$_right$<Annotation>
export type TVGbooleanExpression_binaryExpression$_right<Annotation> = TVTGbooleanExpression_binaryExpression$_right<Annotation>
export type TVTGbooleanExpression_binaryExpression$<Annotation> = {
    readonly "left":  TVGbooleanExpression_binaryExpression$_left<Annotation>
    readonly "operator":  TVGbooleanExpression_binaryExpression$_operator<Annotation>
    readonly "right":  TVGbooleanExpression_binaryExpression$_right<Annotation>
}
export type TVGbooleanExpression_binaryExpression$<Annotation> = TVTGbooleanExpression_binaryExpression$<Annotation>

export type TNGbooleanExpression_binaryExpression$<Annotation> = TAnnotatedType<Annotation, TVGbooleanExpression_binaryExpression$<Annotation>>
export type TVTGbooleanExpression_binaryExpression<Annotation> = TNGbooleanExpression_binaryExpression$<Annotation>
export type TVGbooleanExpression_binaryExpression<Annotation> = TVTGbooleanExpression_binaryExpression<Annotation>
export type TVTGbooleanExpression_prefixUnaryExpression$_data<Annotation> = TGinitialization<Annotation>
export type TVGbooleanExpression_prefixUnaryExpression$_data<Annotation> = TVTGbooleanExpression_prefixUnaryExpression$_data<Annotation>
export type TVTGbooleanExpression_prefixUnaryExpression$<Annotation> = {
    readonly "data":  TVGbooleanExpression_prefixUnaryExpression$_data<Annotation>
}
export type TVGbooleanExpression_prefixUnaryExpression$<Annotation> = TVTGbooleanExpression_prefixUnaryExpression$<Annotation>

export type TNGbooleanExpression_prefixUnaryExpression$<Annotation> = TAnnotatedType<Annotation, TVGbooleanExpression_prefixUnaryExpression$<Annotation>>
export type TVTGbooleanExpression_prefixUnaryExpression<Annotation> = TNGbooleanExpression_prefixUnaryExpression$<Annotation>
export type TVGbooleanExpression_prefixUnaryExpression<Annotation> = TVTGbooleanExpression_prefixUnaryExpression<Annotation>
export type TVTGbooleanExpression<Annotation> =
    | [ "binaryExpression", TVGbooleanExpression_binaryExpression<Annotation>]
    | [ "prefixUnaryExpression", TVGbooleanExpression_prefixUnaryExpression<Annotation>]
export type TGbooleanExpression<Annotation> =  TVTGbooleanExpression<Annotation>
export type TVTGcallback$_name<Annotation> = TGidentifier<Annotation>
export type TVGcallback$_name<Annotation> = TVTGcallback$_name<Annotation>
export type TVTGcallback$_type$_parameter$_name<Annotation> = TGidentifier<Annotation>
export type TVGcallback$_type$_parameter$_name<Annotation> = TVTGcallback$_type$_parameter$_name<Annotation>
export type TVTGcallback$_type$_parameter$_type<Annotation> = TGinterface<Annotation>
export type TVGcallback$_type$_parameter$_type<Annotation> = TVTGcallback$_type$_parameter$_type<Annotation>
export type TVTGcallback$_type$_parameter$<Annotation> = {
    readonly "name":  TVGcallback$_type$_parameter$_name<Annotation>
    readonly "type":  TVGcallback$_type$_parameter$_type<Annotation>
}
export type TVGcallback$_type$_parameter$<Annotation> = TVTGcallback$_type$_parameter$<Annotation>

export type TNGcallback$_type$_parameter$<Annotation> = TAnnotatedType<Annotation, TVGcallback$_type$_parameter$<Annotation>>
export type TVTGcallback$_type$_parameter<Annotation> = TNGcallback$_type$_parameter$<Annotation>
export type TVGcallback$_type$_parameter<Annotation> = TVTGcallback$_type$_parameter<Annotation>

export type TNGcallback$_type$_void$<Annotation> = Annotation
export type TVTGcallback$_type$_void<Annotation> = TNGcallback$_type$_void$<Annotation>
export type TVGcallback$_type$_void<Annotation> = TVTGcallback$_type$_void<Annotation>
export type TVTGcallback$_type$<Annotation> = {
    readonly "parameter":  TVGcallback$_type$_parameter<Annotation>
    readonly "void":  TVGcallback$_type$_void<Annotation>
}
export type TVGcallback$_type$<Annotation> = TVTGcallback$_type$<Annotation>

export type TNGcallback$_type$<Annotation> = TAnnotatedType<Annotation, TVGcallback$_type$<Annotation>>
export type TVTGcallback$_type<Annotation> = TNGcallback$_type$<Annotation>
export type TVGcallback$_type<Annotation> = TVTGcallback$_type<Annotation>
export type TVTGcallback$<Annotation> = {
    readonly "name":  TVGcallback$_name<Annotation>
    readonly "type":  TVGcallback$_type<Annotation>
}
export type TVGcallback$<Annotation> = TVTGcallback$<Annotation>

export type TNGcallback$<Annotation> = TAnnotatedType<Annotation, TVGcallback$<Annotation>>
export type TVTGcallback<Annotation> = TNGcallback$<Annotation>
export type TGcallback<Annotation> =  TVTGcallback<Annotation>

export type TNGidentifier$<Annotation> = TAnnotatedString<Annotation>
export type TVTGidentifier<Annotation> = TNGidentifier$<Annotation>
export type TGidentifier<Annotation> =  TVTGidentifier<Annotation>
export type TVTGinterface_function$_dataParameter$_name<Annotation> = TGidentifier<Annotation>
export type TVGinterface_function$_dataParameter$_name<Annotation> = TVTGinterface_function$_dataParameter$_name<Annotation>
export type TVTGinterface_function$_dataParameter$_type<Annotation> = TGtype<Annotation>
export type TVGinterface_function$_dataParameter$_type<Annotation> = TVTGinterface_function$_dataParameter$_type<Annotation>
export type TVTGinterface_function$_dataParameter$<Annotation> = {
    readonly "name":  TVGinterface_function$_dataParameter$_name<Annotation>
    readonly "type":  TVGinterface_function$_dataParameter$_type<Annotation>
}
export type TVGinterface_function$_dataParameter$<Annotation> = TVTGinterface_function$_dataParameter$<Annotation>

export type TNGinterface_function$_dataParameter$<Annotation> = TAnnotatedType<Annotation, TVGinterface_function$_dataParameter$<Annotation>>
export type TVTGinterface_function$_dataParameter<Annotation> = TNGinterface_function$_dataParameter$<Annotation>
export type TVGinterface_function$_dataParameter<Annotation> = TVTGinterface_function$_dataParameter<Annotation>
export type TVTGinterface_function$_callbackParameter<Annotation> = TGcallback<Annotation>
export type TVGinterface_function$_callbackParameter<Annotation> = pa.optional<TVTGinterface_function$_callbackParameter<Annotation>>

export type TNGinterface_function$_void$<Annotation> = Annotation
export type TVTGinterface_function$_void<Annotation> = TNGinterface_function$_void$<Annotation>
export type TVGinterface_function$_void<Annotation> = TVTGinterface_function$_void<Annotation>
export type TVTGinterface_function$<Annotation> = {
    readonly "dataParameter":  TVGinterface_function$_dataParameter<Annotation>
    readonly "callbackParameter":  TVGinterface_function$_callbackParameter<Annotation>
    readonly "void":  TVGinterface_function$_void<Annotation>
}
export type TVGinterface_function$<Annotation> = TVTGinterface_function$<Annotation>

export type TNGinterface_function$<Annotation> = TAnnotatedType<Annotation, TVGinterface_function$<Annotation>>
export type TVTGinterface_function<Annotation> = TNGinterface_function$<Annotation>
export type TVGinterface_function<Annotation> = TVTGinterface_function<Annotation>

export type TNGinterface_typeLiteral$$_readonly$<Annotation> = Annotation
export type TVTGinterface_typeLiteral$$_readonly<Annotation> = TNGinterface_typeLiteral$$_readonly$<Annotation>
export type TVGinterface_typeLiteral$$_readonly<Annotation> = TVTGinterface_typeLiteral$$_readonly<Annotation>

export type TNGinterface_typeLiteral$$_name$<Annotation> = TAnnotatedString<Annotation>
export type TVTGinterface_typeLiteral$$_name<Annotation> = TNGinterface_typeLiteral$$_name$<Annotation>
export type TVGinterface_typeLiteral$$_name<Annotation> = TVTGinterface_typeLiteral$$_name<Annotation>

export type TNGinterface_typeLiteral$$_questionToken$<Annotation> = Annotation
export type TVTGinterface_typeLiteral$$_questionToken<Annotation> = TNGinterface_typeLiteral$$_questionToken$<Annotation>
export type TVGinterface_typeLiteral$$_questionToken<Annotation> = pa.optional<TVTGinterface_typeLiteral$$_questionToken<Annotation>>
export type TVTGinterface_typeLiteral$$_type<Annotation> = TGinterface<Annotation>
export type TVGinterface_typeLiteral$$_type<Annotation> = pa.optional<TVTGinterface_typeLiteral$$_type<Annotation>>
export type TVTGinterface_typeLiteral$$<Annotation> = {
    readonly "readonly":  TVGinterface_typeLiteral$$_readonly<Annotation>
    readonly "name":  TVGinterface_typeLiteral$$_name<Annotation>
    readonly "questionToken":  TVGinterface_typeLiteral$$_questionToken<Annotation>
    readonly "type":  TVGinterface_typeLiteral$$_type<Annotation>
}
export type TVGinterface_typeLiteral$$<Annotation> = TVTGinterface_typeLiteral$$<Annotation>

export type TNGinterface_typeLiteral$$<Annotation> = TAnnotatedType<Annotation, TVGinterface_typeLiteral$$<Annotation>>
export type TVTGinterface_typeLiteral$<Annotation> = TNGinterface_typeLiteral$$<Annotation>
export type TVGinterface_typeLiteral$<Annotation> = TVTGinterface_typeLiteral$<Annotation>[]

export type TNGinterface_typeLiteral$<Annotation> = TAnnotatedType<Annotation, TVGinterface_typeLiteral$<Annotation>>
export type TVTGinterface_typeLiteral<Annotation> = TNGinterface_typeLiteral$<Annotation>
export type TVGinterface_typeLiteral<Annotation> = TVTGinterface_typeLiteral<Annotation>
export type TVTGinterface_typeReference$_name<Annotation> = TGidentifier<Annotation>
export type TVGinterface_typeReference$_name<Annotation> = TVTGinterface_typeReference$_name<Annotation>
export type TVTGinterface_typeReference$_parameters<Annotation> = TGtype<Annotation>
export type TVGinterface_typeReference$_parameters<Annotation> = TVTGinterface_typeReference$_parameters<Annotation>[]
export type TVTGinterface_typeReference$<Annotation> = {
    readonly "name":  TVGinterface_typeReference$_name<Annotation>
    readonly "parameters":  TVGinterface_typeReference$_parameters<Annotation>
}
export type TVGinterface_typeReference$<Annotation> = TVTGinterface_typeReference$<Annotation>

export type TNGinterface_typeReference$<Annotation> = TAnnotatedType<Annotation, TVGinterface_typeReference$<Annotation>>
export type TVTGinterface_typeReference<Annotation> = TNGinterface_typeReference$<Annotation>
export type TVGinterface_typeReference<Annotation> = TVTGinterface_typeReference<Annotation>
export type TVTGinterface<Annotation> =
    | [ "function", TVGinterface_function<Annotation>]
    | [ "typeLiteral", TVGinterface_typeLiteral<Annotation>]
    | [ "typeReference", TVGinterface_typeReference<Annotation>]
export type TGinterface<Annotation> =  TVTGinterface<Annotation>

export type TNGinitialization_temlateExpression$_head$<Annotation> = TAnnotatedString<Annotation>
export type TVTGinitialization_temlateExpression$_head<Annotation> = TNGinitialization_temlateExpression$_head$<Annotation>
export type TVGinitialization_temlateExpression$_head<Annotation> = TVTGinitialization_temlateExpression$_head<Annotation>
export type TVTGinitialization_temlateExpression$_span$_expression<Annotation> = TGinitialization<Annotation>
export type TVGinitialization_temlateExpression$_span$_expression<Annotation> = TVTGinitialization_temlateExpression$_span$_expression<Annotation>

export type TNGinitialization_temlateExpression$_span$_x_middle$<Annotation> = TAnnotatedString<Annotation>
export type TVTGinitialization_temlateExpression$_span$_x_middle<Annotation> = TNGinitialization_temlateExpression$_span$_x_middle$<Annotation>
export type TVGinitialization_temlateExpression$_span$_x_middle<Annotation> = TVTGinitialization_temlateExpression$_span$_x_middle<Annotation>

export type TNGinitialization_temlateExpression$_span$_x_tail$<Annotation> = TAnnotatedString<Annotation>
export type TVTGinitialization_temlateExpression$_span$_x_tail<Annotation> = TNGinitialization_temlateExpression$_span$_x_tail$<Annotation>
export type TVGinitialization_temlateExpression$_span$_x_tail<Annotation> = TVTGinitialization_temlateExpression$_span$_x_tail<Annotation>
export type TVTGinitialization_temlateExpression$_span$_x<Annotation> =
    | [ "middle", TVGinitialization_temlateExpression$_span$_x_middle<Annotation>]
    | [ "tail", TVGinitialization_temlateExpression$_span$_x_tail<Annotation>]
export type TVGinitialization_temlateExpression$_span$_x<Annotation> = TVTGinitialization_temlateExpression$_span$_x<Annotation>
export type TVTGinitialization_temlateExpression$_span$<Annotation> = {
    readonly "expression":  TVGinitialization_temlateExpression$_span$_expression<Annotation>
    readonly "x":  TVGinitialization_temlateExpression$_span$_x<Annotation>
}
export type TVGinitialization_temlateExpression$_span$<Annotation> = TVTGinitialization_temlateExpression$_span$<Annotation>

export type TNGinitialization_temlateExpression$_span$<Annotation> = TAnnotatedType<Annotation, TVGinitialization_temlateExpression$_span$<Annotation>>
export type TVTGinitialization_temlateExpression$_span<Annotation> = TNGinitialization_temlateExpression$_span$<Annotation>
export type TVGinitialization_temlateExpression$_span<Annotation> = TVTGinitialization_temlateExpression$_span<Annotation>[]
export type TVTGinitialization_temlateExpression$<Annotation> = {
    readonly "head":  TVGinitialization_temlateExpression$_head<Annotation>
    readonly "span":  TVGinitialization_temlateExpression$_span<Annotation>
}
export type TVGinitialization_temlateExpression$<Annotation> = TVTGinitialization_temlateExpression$<Annotation>

export type TNGinitialization_temlateExpression$<Annotation> = TAnnotatedType<Annotation, TVGinitialization_temlateExpression$<Annotation>>
export type TVTGinitialization_temlateExpression<Annotation> = TNGinitialization_temlateExpression$<Annotation>
export type TVGinitialization_temlateExpression<Annotation> = TVTGinitialization_temlateExpression<Annotation>
export type TVTGinitialization_binaryExpression$_left<Annotation> = TGselection<Annotation>
export type TVGinitialization_binaryExpression$_left<Annotation> = TVTGinitialization_binaryExpression$_left<Annotation>

export type TNGinitialization_binaryExpression$_operator_PlusToken$<Annotation> = Annotation
export type TVTGinitialization_binaryExpression$_operator_PlusToken<Annotation> = TNGinitialization_binaryExpression$_operator_PlusToken$<Annotation>
export type TVGinitialization_binaryExpression$_operator_PlusToken<Annotation> = TVTGinitialization_binaryExpression$_operator_PlusToken<Annotation>
export type TVTGinitialization_binaryExpression$_operator<Annotation> =
    | [ "PlusToken", TVGinitialization_binaryExpression$_operator_PlusToken<Annotation>]
export type TVGinitialization_binaryExpression$_operator<Annotation> = TVTGinitialization_binaryExpression$_operator<Annotation>
export type TVTGinitialization_binaryExpression$_right<Annotation> = TGinitialization<Annotation>
export type TVGinitialization_binaryExpression$_right<Annotation> = TVTGinitialization_binaryExpression$_right<Annotation>
export type TVTGinitialization_binaryExpression$<Annotation> = {
    readonly "left":  TVGinitialization_binaryExpression$_left<Annotation>
    readonly "operator":  TVGinitialization_binaryExpression$_operator<Annotation>
    readonly "right":  TVGinitialization_binaryExpression$_right<Annotation>
}
export type TVGinitialization_binaryExpression$<Annotation> = TVTGinitialization_binaryExpression$<Annotation>

export type TNGinitialization_binaryExpression$<Annotation> = TAnnotatedType<Annotation, TVGinitialization_binaryExpression$<Annotation>>
export type TVTGinitialization_binaryExpression<Annotation> = TNGinitialization_binaryExpression$<Annotation>
export type TVGinitialization_binaryExpression<Annotation> = TVTGinitialization_binaryExpression<Annotation>
export type TVTGinitialization_functionImplementation$_dataParameter<Annotation> = TGtypelessParameter<Annotation>
export type TVGinitialization_functionImplementation$_dataParameter<Annotation> = pa.optional<TVTGinitialization_functionImplementation$_dataParameter<Annotation>>
export type TVTGinitialization_functionImplementation$_interfaceParameter<Annotation> = TGtypelessParameter<Annotation>
export type TVGinitialization_functionImplementation$_interfaceParameter<Annotation> = pa.optional<TVTGinitialization_functionImplementation$_interfaceParameter<Annotation>>
export type TVTGinitialization_functionImplementation$_callbackParameter<Annotation> = TGtypelessParameter<Annotation>
export type TVGinitialization_functionImplementation$_callbackParameter<Annotation> = pa.optional<TVTGinitialization_functionImplementation$_callbackParameter<Annotation>>

export type TNGinitialization_functionImplementation$_equalsGreaterThan$<Annotation> = Annotation
export type TVTGinitialization_functionImplementation$_equalsGreaterThan<Annotation> = TNGinitialization_functionImplementation$_equalsGreaterThan$<Annotation>
export type TVGinitialization_functionImplementation$_equalsGreaterThan<Annotation> = TVTGinitialization_functionImplementation$_equalsGreaterThan<Annotation>
export type TVTGinitialization_functionImplementation$_block<Annotation> = TGblock<Annotation>
export type TVGinitialization_functionImplementation$_block<Annotation> = TVTGinitialization_functionImplementation$_block<Annotation>
export type TVTGinitialization_functionImplementation$<Annotation> = {
    readonly "dataParameter":  TVGinitialization_functionImplementation$_dataParameter<Annotation>
    readonly "interfaceParameter":  TVGinitialization_functionImplementation$_interfaceParameter<Annotation>
    readonly "callbackParameter":  TVGinitialization_functionImplementation$_callbackParameter<Annotation>
    readonly "equalsGreaterThan":  TVGinitialization_functionImplementation$_equalsGreaterThan<Annotation>
    readonly "block":  TVGinitialization_functionImplementation$_block<Annotation>
}
export type TVGinitialization_functionImplementation$<Annotation> = TVTGinitialization_functionImplementation$<Annotation>

export type TNGinitialization_functionImplementation$<Annotation> = TAnnotatedType<Annotation, TVGinitialization_functionImplementation$<Annotation>>
export type TVTGinitialization_functionImplementation<Annotation> = TNGinitialization_functionImplementation$<Annotation>
export type TVGinitialization_functionImplementation<Annotation> = TVTGinitialization_functionImplementation<Annotation>
export type TVTGinitialization_literal<Annotation> = TGliteralDataInitialization<Annotation>
export type TVGinitialization_literal<Annotation> = TVTGinitialization_literal<Annotation>

export type TNGinitialization_objectLiteral$$_name$<Annotation> = TAnnotatedString<Annotation>
export type TVTGinitialization_objectLiteral$$_name<Annotation> = TNGinitialization_objectLiteral$$_name$<Annotation>
export type TVGinitialization_objectLiteral$$_name<Annotation> = TVTGinitialization_objectLiteral$$_name<Annotation>
export type TVTGinitialization_objectLiteral$$_initialization<Annotation> = TGinitialization<Annotation>
export type TVGinitialization_objectLiteral$$_initialization<Annotation> = TVTGinitialization_objectLiteral$$_initialization<Annotation>
export type TVTGinitialization_objectLiteral$$<Annotation> = {
    readonly "name":  TVGinitialization_objectLiteral$$_name<Annotation>
    readonly "initialization":  TVGinitialization_objectLiteral$$_initialization<Annotation>
}
export type TVGinitialization_objectLiteral$$<Annotation> = TVTGinitialization_objectLiteral$$<Annotation>

export type TNGinitialization_objectLiteral$$<Annotation> = TAnnotatedType<Annotation, TVGinitialization_objectLiteral$$<Annotation>>
export type TVTGinitialization_objectLiteral$<Annotation> = TNGinitialization_objectLiteral$$<Annotation>
export type TVGinitialization_objectLiteral$<Annotation> = TVTGinitialization_objectLiteral$<Annotation>[]

export type TNGinitialization_objectLiteral$<Annotation> = TAnnotatedType<Annotation, TVGinitialization_objectLiteral$<Annotation>>
export type TVTGinitialization_objectLiteral<Annotation> = TNGinitialization_objectLiteral$<Annotation>
export type TVGinitialization_objectLiteral<Annotation> = TVTGinitialization_objectLiteral<Annotation>
export type TVTGinitialization_selection<Annotation> = TGselection<Annotation>
export type TVGinitialization_selection<Annotation> = TVTGinitialization_selection<Annotation>
export type TVTGinitialization<Annotation> =
    | [ "temlateExpression", TVGinitialization_temlateExpression<Annotation>]
    | [ "binaryExpression", TVGinitialization_binaryExpression<Annotation>]
    | [ "functionImplementation", TVGinitialization_functionImplementation<Annotation>]
    | [ "literal", TVGinitialization_literal<Annotation>]
    | [ "objectLiteral", TVGinitialization_objectLiteral<Annotation>]
    | [ "selection", TVGinitialization_selection<Annotation>]
export type TGinitialization<Annotation> =  TVTGinitialization<Annotation>

export type TNGliteralDataInitialization_state$_state$<Annotation> = TAnnotatedString<Annotation>
export type TVTGliteralDataInitialization_state$_state<Annotation> = TNGliteralDataInitialization_state$_state$<Annotation>
export type TVGliteralDataInitialization_state$_state<Annotation> = TVTGliteralDataInitialization_state$_state<Annotation>
export type TVTGliteralDataInitialization_state$_data<Annotation> = TGinitialization<Annotation>
export type TVGliteralDataInitialization_state$_data<Annotation> = TVTGliteralDataInitialization_state$_data<Annotation>
export type TVTGliteralDataInitialization_state$<Annotation> = {
    readonly "state":  TVGliteralDataInitialization_state$_state<Annotation>
    readonly "data":  TVGliteralDataInitialization_state$_data<Annotation>
}
export type TVGliteralDataInitialization_state$<Annotation> = TVTGliteralDataInitialization_state$<Annotation>

export type TNGliteralDataInitialization_state$<Annotation> = TAnnotatedType<Annotation, TVGliteralDataInitialization_state$<Annotation>>
export type TVTGliteralDataInitialization_state<Annotation> = TNGliteralDataInitialization_state$<Annotation>
export type TVGliteralDataInitialization_state<Annotation> = TVTGliteralDataInitialization_state<Annotation>

export type TNGliteralDataInitialization_false$<Annotation> = Annotation
export type TVTGliteralDataInitialization_false<Annotation> = TNGliteralDataInitialization_false$<Annotation>
export type TVGliteralDataInitialization_false<Annotation> = TVTGliteralDataInitialization_false<Annotation>

export type TNGliteralDataInitialization_stringLiteral$<Annotation> = TAnnotatedString<Annotation>
export type TVTGliteralDataInitialization_stringLiteral<Annotation> = TNGliteralDataInitialization_stringLiteral$<Annotation>
export type TVGliteralDataInitialization_stringLiteral<Annotation> = TVTGliteralDataInitialization_stringLiteral<Annotation>

export type TNGliteralDataInitialization_numericLiteral$<Annotation> = TAnnotatedString<Annotation>
export type TVTGliteralDataInitialization_numericLiteral<Annotation> = TNGliteralDataInitialization_numericLiteral$<Annotation>
export type TVGliteralDataInitialization_numericLiteral<Annotation> = TVTGliteralDataInitialization_numericLiteral<Annotation>

export type TNGliteralDataInitialization_null$<Annotation> = Annotation
export type TVTGliteralDataInitialization_null<Annotation> = TNGliteralDataInitialization_null$<Annotation>
export type TVGliteralDataInitialization_null<Annotation> = TVTGliteralDataInitialization_null<Annotation>

export type TNGliteralDataInitialization_true$<Annotation> = Annotation
export type TVTGliteralDataInitialization_true<Annotation> = TNGliteralDataInitialization_true$<Annotation>
export type TVGliteralDataInitialization_true<Annotation> = TVTGliteralDataInitialization_true<Annotation>
export type TVTGliteralDataInitialization_array$$<Annotation> = TGinitialization<Annotation>
export type TVGliteralDataInitialization_array$$<Annotation> = TVTGliteralDataInitialization_array$$<Annotation>[]

export type TNGliteralDataInitialization_array$$<Annotation> = TAnnotatedType<Annotation, TVGliteralDataInitialization_array$$<Annotation>>
export type TVTGliteralDataInitialization_array$<Annotation> = TNGliteralDataInitialization_array$$<Annotation>
export type TVGliteralDataInitialization_array$<Annotation> = TVTGliteralDataInitialization_array$<Annotation>

export type TNGliteralDataInitialization_array$<Annotation> = TAnnotatedType<Annotation, TVGliteralDataInitialization_array$<Annotation>>
export type TVTGliteralDataInitialization_array<Annotation> = TNGliteralDataInitialization_array$<Annotation>
export type TVGliteralDataInitialization_array<Annotation> = TVTGliteralDataInitialization_array<Annotation>
export type TVTGliteralDataInitialization<Annotation> =
    | [ "state", TVGliteralDataInitialization_state<Annotation>]
    | [ "false", TVGliteralDataInitialization_false<Annotation>]
    | [ "stringLiteral", TVGliteralDataInitialization_stringLiteral<Annotation>]
    | [ "numericLiteral", TVGliteralDataInitialization_numericLiteral<Annotation>]
    | [ "null", TVGliteralDataInitialization_null<Annotation>]
    | [ "true", TVGliteralDataInitialization_true<Annotation>]
    | [ "array", TVGliteralDataInitialization_array<Annotation>]
export type TGliteralDataInitialization<Annotation> =  TVTGliteralDataInitialization<Annotation>
export type TVTGparameterTriplet_dataParameter$_name<Annotation> = TGidentifier<Annotation>
export type TVGparameterTriplet_dataParameter$_name<Annotation> = TVTGparameterTriplet_dataParameter$_name<Annotation>
export type TVTGparameterTriplet_dataParameter$_type<Annotation> = TGtype<Annotation>
export type TVGparameterTriplet_dataParameter$_type<Annotation> = TVTGparameterTriplet_dataParameter$_type<Annotation>
export type TVTGparameterTriplet_dataParameter$<Annotation> = {
    readonly "name":  TVGparameterTriplet_dataParameter$_name<Annotation>
    readonly "type":  TVGparameterTriplet_dataParameter$_type<Annotation>
}
export type TVGparameterTriplet_dataParameter$<Annotation> = TVTGparameterTriplet_dataParameter$<Annotation>

export type TNGparameterTriplet_dataParameter$<Annotation> = TAnnotatedType<Annotation, TVGparameterTriplet_dataParameter$<Annotation>>
export type TVTGparameterTriplet_dataParameter<Annotation> = TNGparameterTriplet_dataParameter$<Annotation>
export type TVGparameterTriplet_dataParameter<Annotation> = TVTGparameterTriplet_dataParameter<Annotation>
export type TVTGparameterTriplet_interfaceParameter$_name<Annotation> = TGidentifier<Annotation>
export type TVGparameterTriplet_interfaceParameter$_name<Annotation> = TVTGparameterTriplet_interfaceParameter$_name<Annotation>
export type TVTGparameterTriplet_interfaceParameter$_interface<Annotation> = TGinterface<Annotation>
export type TVGparameterTriplet_interfaceParameter$_interface<Annotation> = TVTGparameterTriplet_interfaceParameter$_interface<Annotation>
export type TVTGparameterTriplet_interfaceParameter$<Annotation> = {
    readonly "name":  TVGparameterTriplet_interfaceParameter$_name<Annotation>
    readonly "interface":  TVGparameterTriplet_interfaceParameter$_interface<Annotation>
}
export type TVGparameterTriplet_interfaceParameter$<Annotation> = TVTGparameterTriplet_interfaceParameter$<Annotation>

export type TNGparameterTriplet_interfaceParameter$<Annotation> = TAnnotatedType<Annotation, TVGparameterTriplet_interfaceParameter$<Annotation>>
export type TVTGparameterTriplet_interfaceParameter<Annotation> = TNGparameterTriplet_interfaceParameter$<Annotation>
export type TVGparameterTriplet_interfaceParameter<Annotation> = TVTGparameterTriplet_interfaceParameter<Annotation>
export type TVTGparameterTriplet_callbackParameter<Annotation> = TGcallback<Annotation>
export type TVGparameterTriplet_callbackParameter<Annotation> = pa.optional<TVTGparameterTriplet_callbackParameter<Annotation>>
export type TVTGparameterTriplet<Annotation> = {
    readonly "dataParameter":  TVGparameterTriplet_dataParameter<Annotation>
    readonly "interfaceParameter":  TVGparameterTriplet_interfaceParameter<Annotation>
    readonly "callbackParameter":  TVGparameterTriplet_callbackParameter<Annotation>
}
export type TGparameterTriplet<Annotation> =  TVTGparameterTriplet<Annotation>
export type TVTGselection_call$_name<Annotation> = TGselection<Annotation>
export type TVGselection_call$_name<Annotation> = TVTGselection_call$_name<Annotation>
export type TVTGselection_call$_initialization<Annotation> = TGinitialization<Annotation>
export type TVGselection_call$_initialization<Annotation> = TVTGselection_call$_initialization<Annotation>
export type TVTGselection_call$<Annotation> = {
    readonly "name":  TVGselection_call$_name<Annotation>
    readonly "initialization":  TVGselection_call$_initialization<Annotation>
}
export type TVGselection_call$<Annotation> = TVTGselection_call$<Annotation>

export type TNGselection_call$<Annotation> = TAnnotatedType<Annotation, TVGselection_call$<Annotation>>
export type TVTGselection_call<Annotation> = TNGselection_call$<Annotation>
export type TVGselection_call<Annotation> = TVTGselection_call<Annotation>
export type TVTGselection_conditial$_condition<Annotation> = TGselection<Annotation>
export type TVGselection_conditial$_condition<Annotation> = TVTGselection_conditial$_condition<Annotation>

export type TNGselection_conditial$_questionToken$<Annotation> = Annotation
export type TVTGselection_conditial$_questionToken<Annotation> = TNGselection_conditial$_questionToken$<Annotation>
export type TVGselection_conditial$_questionToken<Annotation> = TVTGselection_conditial$_questionToken<Annotation>
export type TVTGselection_conditial$_then<Annotation> = TGinitialization<Annotation>
export type TVGselection_conditial$_then<Annotation> = TVTGselection_conditial$_then<Annotation>

export type TNGselection_conditial$_colon$<Annotation> = Annotation
export type TVTGselection_conditial$_colon<Annotation> = TNGselection_conditial$_colon$<Annotation>
export type TVGselection_conditial$_colon<Annotation> = TVTGselection_conditial$_colon<Annotation>
export type TVTGselection_conditial$_else<Annotation> = TGinitialization<Annotation>
export type TVGselection_conditial$_else<Annotation> = TVTGselection_conditial$_else<Annotation>
export type TVTGselection_conditial$<Annotation> = {
    readonly "condition":  TVGselection_conditial$_condition<Annotation>
    readonly "questionToken":  TVGselection_conditial$_questionToken<Annotation>
    readonly "then":  TVGselection_conditial$_then<Annotation>
    readonly "colon":  TVGselection_conditial$_colon<Annotation>
    readonly "else":  TVGselection_conditial$_else<Annotation>
}
export type TVGselection_conditial$<Annotation> = TVTGselection_conditial$<Annotation>

export type TNGselection_conditial$<Annotation> = TAnnotatedType<Annotation, TVGselection_conditial$<Annotation>>
export type TVTGselection_conditial<Annotation> = TNGselection_conditial$<Annotation>
export type TVGselection_conditial<Annotation> = TVTGselection_conditial<Annotation>
export type TVTGselection_identifier<Annotation> = TGidentifier<Annotation>
export type TVGselection_identifier<Annotation> = TVTGselection_identifier<Annotation>
export type TVTGselection_propertyAccess$_first<Annotation> = TGselection<Annotation>
export type TVGselection_propertyAccess$_first<Annotation> = TVTGselection_propertyAccess$_first<Annotation>
export type TVTGselection_propertyAccess$_second<Annotation> = TGidentifier<Annotation>
export type TVGselection_propertyAccess$_second<Annotation> = TVTGselection_propertyAccess$_second<Annotation>
export type TVTGselection_propertyAccess$<Annotation> = {
    readonly "first":  TVGselection_propertyAccess$_first<Annotation>
    readonly "second":  TVGselection_propertyAccess$_second<Annotation>
}
export type TVGselection_propertyAccess$<Annotation> = TVTGselection_propertyAccess$<Annotation>

export type TNGselection_propertyAccess$<Annotation> = TAnnotatedType<Annotation, TVGselection_propertyAccess$<Annotation>>
export type TVTGselection_propertyAccess<Annotation> = TNGselection_propertyAccess$<Annotation>
export type TVGselection_propertyAccess<Annotation> = TVTGselection_propertyAccess<Annotation>
export type TVTGselection<Annotation> =
    | [ "call", TVGselection_call<Annotation>]
    | [ "conditial", TVGselection_conditial<Annotation>]
    | [ "identifier", TVGselection_identifier<Annotation>]
    | [ "propertyAccess", TVGselection_propertyAccess<Annotation>]
export type TGselection<Annotation> =  TVTGselection<Annotation>
export type TVTGtype_array$<Annotation> = TGtype<Annotation>
export type TVGtype_array$<Annotation> = TVTGtype_array$<Annotation>

export type TNGtype_array$<Annotation> = TAnnotatedType<Annotation, TVGtype_array$<Annotation>>
export type TVTGtype_array<Annotation> = TNGtype_array$<Annotation>
export type TVGtype_array<Annotation> = TVTGtype_array<Annotation>

export type TNGtype_boolean$<Annotation> = Annotation
export type TVTGtype_boolean<Annotation> = TNGtype_boolean$<Annotation>
export type TVGtype_boolean<Annotation> = TVTGtype_boolean<Annotation>

export type TNGtype_string$<Annotation> = Annotation
export type TVTGtype_string<Annotation> = TNGtype_string$<Annotation>
export type TVGtype_string<Annotation> = TVTGtype_string<Annotation>

export type TNGtype_number$<Annotation> = Annotation
export type TVTGtype_number<Annotation> = TNGtype_number$<Annotation>
export type TVGtype_number<Annotation> = TVTGtype_number<Annotation>

export type TNGtype_literalType$$<Annotation> = Annotation
export type TVTGtype_literalType$<Annotation> = TNGtype_literalType$$<Annotation>
export type TVGtype_literalType$<Annotation> = TVTGtype_literalType$<Annotation>

export type TNGtype_literalType$<Annotation> = TAnnotatedType<Annotation, TVGtype_literalType$<Annotation>>
export type TVTGtype_literalType<Annotation> = TNGtype_literalType$<Annotation>
export type TVGtype_literalType<Annotation> = TVTGtype_literalType<Annotation>
export type TVTGtype_typeLiteral$_index$_key$_name<Annotation> = TGidentifier<Annotation>
export type TVGtype_typeLiteral$_index$_key$_name<Annotation> = TVTGtype_typeLiteral$_index$_key$_name<Annotation>

export type TNGtype_typeLiteral$_index$_key$_type$<Annotation> = Annotation
export type TVTGtype_typeLiteral$_index$_key$_type<Annotation> = TNGtype_typeLiteral$_index$_key$_type$<Annotation>
export type TVGtype_typeLiteral$_index$_key$_type<Annotation> = TVTGtype_typeLiteral$_index$_key$_type<Annotation>
export type TVTGtype_typeLiteral$_index$_key$<Annotation> = {
    readonly "name":  TVGtype_typeLiteral$_index$_key$_name<Annotation>
    readonly "type":  TVGtype_typeLiteral$_index$_key$_type<Annotation>
}
export type TVGtype_typeLiteral$_index$_key$<Annotation> = TVTGtype_typeLiteral$_index$_key$<Annotation>

export type TNGtype_typeLiteral$_index$_key$<Annotation> = TAnnotatedType<Annotation, TVGtype_typeLiteral$_index$_key$<Annotation>>
export type TVTGtype_typeLiteral$_index$_key<Annotation> = TNGtype_typeLiteral$_index$_key$<Annotation>
export type TVGtype_typeLiteral$_index$_key<Annotation> = TVTGtype_typeLiteral$_index$_key<Annotation>
export type TVTGtype_typeLiteral$_index$_type<Annotation> = TGtype<Annotation>
export type TVGtype_typeLiteral$_index$_type<Annotation> = TVTGtype_typeLiteral$_index$_type<Annotation>
export type TVTGtype_typeLiteral$_index$<Annotation> = {
    readonly "key":  TVGtype_typeLiteral$_index$_key<Annotation>
    readonly "type":  TVGtype_typeLiteral$_index$_type<Annotation>
}
export type TVGtype_typeLiteral$_index$<Annotation> = TVTGtype_typeLiteral$_index$<Annotation>

export type TNGtype_typeLiteral$_index$<Annotation> = TAnnotatedType<Annotation, TVGtype_typeLiteral$_index$<Annotation>>
export type TVTGtype_typeLiteral$_index<Annotation> = TNGtype_typeLiteral$_index$<Annotation>
export type TVGtype_typeLiteral$_index<Annotation> = TVTGtype_typeLiteral$_index<Annotation>

export type TNGtype_typeLiteral$_properties$_readonly$<Annotation> = Annotation
export type TVTGtype_typeLiteral$_properties$_readonly<Annotation> = TNGtype_typeLiteral$_properties$_readonly$<Annotation>
export type TVGtype_typeLiteral$_properties$_readonly<Annotation> = TVTGtype_typeLiteral$_properties$_readonly<Annotation>

export type TNGtype_typeLiteral$_properties$_name$<Annotation> = TAnnotatedString<Annotation>
export type TVTGtype_typeLiteral$_properties$_name<Annotation> = TNGtype_typeLiteral$_properties$_name$<Annotation>
export type TVGtype_typeLiteral$_properties$_name<Annotation> = TVTGtype_typeLiteral$_properties$_name<Annotation>

export type TNGtype_typeLiteral$_properties$_questionToken$<Annotation> = Annotation
export type TVTGtype_typeLiteral$_properties$_questionToken<Annotation> = TNGtype_typeLiteral$_properties$_questionToken$<Annotation>
export type TVGtype_typeLiteral$_properties$_questionToken<Annotation> = pa.optional<TVTGtype_typeLiteral$_properties$_questionToken<Annotation>>
export type TVTGtype_typeLiteral$_properties$_type<Annotation> = TGtype<Annotation>
export type TVGtype_typeLiteral$_properties$_type<Annotation> = TVTGtype_typeLiteral$_properties$_type<Annotation>
export type TVTGtype_typeLiteral$_properties$<Annotation> = {
    readonly "readonly":  TVGtype_typeLiteral$_properties$_readonly<Annotation>
    readonly "name":  TVGtype_typeLiteral$_properties$_name<Annotation>
    readonly "questionToken":  TVGtype_typeLiteral$_properties$_questionToken<Annotation>
    readonly "type":  TVGtype_typeLiteral$_properties$_type<Annotation>
}
export type TVGtype_typeLiteral$_properties$<Annotation> = TVTGtype_typeLiteral$_properties$<Annotation>

export type TNGtype_typeLiteral$_properties$<Annotation> = TAnnotatedType<Annotation, TVGtype_typeLiteral$_properties$<Annotation>>
export type TVTGtype_typeLiteral$_properties<Annotation> = TNGtype_typeLiteral$_properties$<Annotation>
export type TVGtype_typeLiteral$_properties<Annotation> = TVTGtype_typeLiteral$_properties<Annotation>[]
export type TVTGtype_typeLiteral$<Annotation> =
    | [ "index", TVGtype_typeLiteral$_index<Annotation>]
    | [ "properties", TVGtype_typeLiteral$_properties<Annotation>]
export type TVGtype_typeLiteral$<Annotation> = pa.optional<TVTGtype_typeLiteral$<Annotation>>

export type TNGtype_typeLiteral$<Annotation> = TAnnotatedType<Annotation, TVGtype_typeLiteral$<Annotation>>
export type TVTGtype_typeLiteral<Annotation> = TNGtype_typeLiteral$<Annotation>
export type TVGtype_typeLiteral<Annotation> = TVTGtype_typeLiteral<Annotation>
export type TVTGtype_typeReference$_referencedType_identifier<Annotation> = TGidentifier<Annotation>
export type TVGtype_typeReference$_referencedType_identifier<Annotation> = TVTGtype_typeReference$_referencedType_identifier<Annotation>
export type TVTGtype_typeReference$_referencedType_qualifiedName$_context<Annotation> = TGidentifier<Annotation>
export type TVGtype_typeReference$_referencedType_qualifiedName$_context<Annotation> = TVTGtype_typeReference$_referencedType_qualifiedName$_context<Annotation>
export type TVTGtype_typeReference$_referencedType_qualifiedName$_type<Annotation> = TGidentifier<Annotation>
export type TVGtype_typeReference$_referencedType_qualifiedName$_type<Annotation> = TVTGtype_typeReference$_referencedType_qualifiedName$_type<Annotation>
export type TVTGtype_typeReference$_referencedType_qualifiedName$<Annotation> = {
    readonly "context":  TVGtype_typeReference$_referencedType_qualifiedName$_context<Annotation>
    readonly "type":  TVGtype_typeReference$_referencedType_qualifiedName$_type<Annotation>
}
export type TVGtype_typeReference$_referencedType_qualifiedName$<Annotation> = TVTGtype_typeReference$_referencedType_qualifiedName$<Annotation>

export type TNGtype_typeReference$_referencedType_qualifiedName$<Annotation> = TAnnotatedType<Annotation, TVGtype_typeReference$_referencedType_qualifiedName$<Annotation>>
export type TVTGtype_typeReference$_referencedType_qualifiedName<Annotation> = TNGtype_typeReference$_referencedType_qualifiedName$<Annotation>
export type TVGtype_typeReference$_referencedType_qualifiedName<Annotation> = TVTGtype_typeReference$_referencedType_qualifiedName<Annotation>
export type TVTGtype_typeReference$_referencedType<Annotation> =
    | [ "identifier", TVGtype_typeReference$_referencedType_identifier<Annotation>]
    | [ "qualifiedName", TVGtype_typeReference$_referencedType_qualifiedName<Annotation>]
export type TVGtype_typeReference$_referencedType<Annotation> = TVTGtype_typeReference$_referencedType<Annotation>
export type TVTGtype_typeReference$_typeArguments<Annotation> = TGtype<Annotation>
export type TVGtype_typeReference$_typeArguments<Annotation> = TVTGtype_typeReference$_typeArguments<Annotation>[]
export type TVTGtype_typeReference$<Annotation> = {
    readonly "referencedType":  TVGtype_typeReference$_referencedType<Annotation>
    readonly "typeArguments":  TVGtype_typeReference$_typeArguments<Annotation>
}
export type TVGtype_typeReference$<Annotation> = TVTGtype_typeReference$<Annotation>

export type TNGtype_typeReference$<Annotation> = TAnnotatedType<Annotation, TVGtype_typeReference$<Annotation>>
export type TVTGtype_typeReference<Annotation> = TNGtype_typeReference$<Annotation>
export type TVGtype_typeReference<Annotation> = TVTGtype_typeReference<Annotation>

export type TNGtype_union$$_state$$<Annotation> = TAnnotatedString<Annotation>
export type TVTGtype_union$$_state$<Annotation> = TNGtype_union$$_state$$<Annotation>
export type TVGtype_union$$_state$<Annotation> = TVTGtype_union$$_state$<Annotation>

export type TNGtype_union$$_state$<Annotation> = TAnnotatedType<Annotation, TVGtype_union$$_state$<Annotation>>
export type TVTGtype_union$$_state<Annotation> = TNGtype_union$$_state$<Annotation>
export type TVGtype_union$$_state<Annotation> = TVTGtype_union$$_state<Annotation>
export type TVTGtype_union$$_data<Annotation> = TGtype<Annotation>
export type TVGtype_union$$_data<Annotation> = TVTGtype_union$$_data<Annotation>
export type TVTGtype_union$$<Annotation> = {
    readonly "state":  TVGtype_union$$_state<Annotation>
    readonly "data":  TVGtype_union$$_data<Annotation>
}
export type TVGtype_union$$<Annotation> = TVTGtype_union$$<Annotation>

export type TNGtype_union$$<Annotation> = TAnnotatedType<Annotation, TVGtype_union$$<Annotation>>
export type TVTGtype_union$<Annotation> = TNGtype_union$$<Annotation>
export type TVGtype_union$<Annotation> = TVTGtype_union$<Annotation>[]

export type TNGtype_union$<Annotation> = TAnnotatedType<Annotation, TVGtype_union$<Annotation>>
export type TVTGtype_union<Annotation> = TNGtype_union$<Annotation>
export type TVGtype_union<Annotation> = TVTGtype_union<Annotation>
export type TVTGtype<Annotation> =
    | [ "array", TVGtype_array<Annotation>]
    | [ "boolean", TVGtype_boolean<Annotation>]
    | [ "string", TVGtype_string<Annotation>]
    | [ "number", TVGtype_number<Annotation>]
    | [ "literalType", TVGtype_literalType<Annotation>]
    | [ "typeLiteral", TVGtype_typeLiteral<Annotation>]
    | [ "typeReference", TVGtype_typeReference<Annotation>]
    | [ "union", TVGtype_union<Annotation>]
export type TGtype<Annotation> =  TVTGtype<Annotation>
export type TVTGtypelessParameter$<Annotation> = TGidentifier<Annotation>
export type TVGtypelessParameter$<Annotation> = TVTGtypelessParameter$<Annotation>

export type TNGtypelessParameter$<Annotation> = TAnnotatedType<Annotation, TVGtypelessParameter$<Annotation>>
export type TVTGtypelessParameter<Annotation> = TNGtypelessParameter$<Annotation>
export type TGtypelessParameter<Annotation> =  TVTGtypelessParameter<Annotation>
export type TVTroot_imports$_clause$_namespace$<Annotation> = TGidentifier<Annotation>
export type TVroot_imports$_clause$_namespace$<Annotation> = TVTroot_imports$_clause$_namespace$<Annotation>

export type TNroot_imports$_clause$_namespace$<Annotation> = TAnnotatedType<Annotation, TVroot_imports$_clause$_namespace$<Annotation>>
export type TVTroot_imports$_clause$_namespace<Annotation> = TNroot_imports$_clause$_namespace$<Annotation>
export type TVroot_imports$_clause$_namespace<Annotation> = TVTroot_imports$_clause$_namespace<Annotation>
export type TVTroot_imports$_clause$_named$$_name<Annotation> = TGidentifier<Annotation>
export type TVroot_imports$_clause$_named$$_name<Annotation> = TVTroot_imports$_clause$_named$$_name<Annotation>
export type TVTroot_imports$_clause$_named$$_as<Annotation> = TGidentifier<Annotation>
export type TVroot_imports$_clause$_named$$_as<Annotation> = pa.optional<TVTroot_imports$_clause$_named$$_as<Annotation>>
export type TVTroot_imports$_clause$_named$$<Annotation> = {
    readonly "name":  TVroot_imports$_clause$_named$$_name<Annotation>
    readonly "as":  TVroot_imports$_clause$_named$$_as<Annotation>
}
export type TVroot_imports$_clause$_named$$<Annotation> = TVTroot_imports$_clause$_named$$<Annotation>

export type TNroot_imports$_clause$_named$$<Annotation> = TAnnotatedType<Annotation, TVroot_imports$_clause$_named$$<Annotation>>
export type TVTroot_imports$_clause$_named$<Annotation> = TNroot_imports$_clause$_named$$<Annotation>
export type TVroot_imports$_clause$_named$<Annotation> = TVTroot_imports$_clause$_named$<Annotation>[]

export type TNroot_imports$_clause$_named$<Annotation> = TAnnotatedType<Annotation, TVroot_imports$_clause$_named$<Annotation>>
export type TVTroot_imports$_clause$_named<Annotation> = TNroot_imports$_clause$_named$<Annotation>
export type TVroot_imports$_clause$_named<Annotation> = TVTroot_imports$_clause$_named<Annotation>
export type TVTroot_imports$_clause$<Annotation> =
    | [ "namespace", TVroot_imports$_clause$_namespace<Annotation>]
    | [ "named", TVroot_imports$_clause$_named<Annotation>]
export type TVroot_imports$_clause$<Annotation> = TVTroot_imports$_clause$<Annotation>

export type TNroot_imports$_clause$<Annotation> = TAnnotatedType<Annotation, TVroot_imports$_clause$<Annotation>>
export type TVTroot_imports$_clause<Annotation> = TNroot_imports$_clause$<Annotation>
export type TVroot_imports$_clause<Annotation> = TVTroot_imports$_clause<Annotation>

export type TNroot_imports$_file$<Annotation> = TAnnotatedString<Annotation>
export type TVTroot_imports$_file<Annotation> = TNroot_imports$_file$<Annotation>
export type TVroot_imports$_file<Annotation> = TVTroot_imports$_file<Annotation>
export type TVTroot_imports$<Annotation> = {
    readonly "clause":  TVroot_imports$_clause<Annotation>
    readonly "file":  TVroot_imports$_file<Annotation>
}
export type TVroot_imports$<Annotation> = TVTroot_imports$<Annotation>

export type TNroot_imports$<Annotation> = TAnnotatedType<Annotation, TVroot_imports$<Annotation>>
export type TVTroot_imports<Annotation> = TNroot_imports$<Annotation>
export type TVroot_imports<Annotation> = TVTroot_imports<Annotation>[]

export type TNroot_procedures$_export$<Annotation> = Annotation
export type TVTroot_procedures$_export<Annotation> = TNroot_procedures$_export$<Annotation>
export type TVroot_procedures$_export<Annotation> = TVTroot_procedures$_export<Annotation>
export type TVTroot_procedures$_name<Annotation> = TGidentifier<Annotation>
export type TVroot_procedures$_name<Annotation> = TVTroot_procedures$_name<Annotation>
export type TVTroot_procedures$_typeParameters$<Annotation> = TGidentifier<Annotation>
export type TVroot_procedures$_typeParameters$<Annotation> = TVTroot_procedures$_typeParameters$<Annotation>

export type TNroot_procedures$_typeParameters$<Annotation> = TAnnotatedType<Annotation, TVroot_procedures$_typeParameters$<Annotation>>
export type TVTroot_procedures$_typeParameters<Annotation> = TNroot_procedures$_typeParameters$<Annotation>
export type TVroot_procedures$_typeParameters<Annotation> = TVTroot_procedures$_typeParameters<Annotation>[]
export type TVTroot_procedures$_parameters$_name<Annotation> = TGidentifier<Annotation>
export type TVroot_procedures$_parameters$_name<Annotation> = TVTroot_procedures$_parameters$_name<Annotation>
export type TVTroot_procedures$_parameters$_type_func$_parameters$_name<Annotation> = TGidentifier<Annotation>
export type TVroot_procedures$_parameters$_type_func$_parameters$_name<Annotation> = TVTroot_procedures$_parameters$_type_func$_parameters$_name<Annotation>
export type TVTroot_procedures$_parameters$_type_func$_parameters$_type<Annotation> = TGtype<Annotation>
export type TVroot_procedures$_parameters$_type_func$_parameters$_type<Annotation> = TVTroot_procedures$_parameters$_type_func$_parameters$_type<Annotation>
export type TVTroot_procedures$_parameters$_type_func$_parameters$<Annotation> = {
    readonly "name":  TVroot_procedures$_parameters$_type_func$_parameters$_name<Annotation>
    readonly "type":  TVroot_procedures$_parameters$_type_func$_parameters$_type<Annotation>
}
export type TVroot_procedures$_parameters$_type_func$_parameters$<Annotation> = TVTroot_procedures$_parameters$_type_func$_parameters$<Annotation>

export type TNroot_procedures$_parameters$_type_func$_parameters$<Annotation> = TAnnotatedType<Annotation, TVroot_procedures$_parameters$_type_func$_parameters$<Annotation>>
export type TVTroot_procedures$_parameters$_type_func$_parameters<Annotation> = TNroot_procedures$_parameters$_type_func$_parameters$<Annotation>
export type TVroot_procedures$_parameters$_type_func$_parameters<Annotation> = TVTroot_procedures$_parameters$_type_func$_parameters<Annotation>
export type TVTroot_procedures$_parameters$_type_func$_returnType<Annotation> = TGtype<Annotation>
export type TVroot_procedures$_parameters$_type_func$_returnType<Annotation> = TVTroot_procedures$_parameters$_type_func$_returnType<Annotation>
export type TVTroot_procedures$_parameters$_type_func$<Annotation> = {
    readonly "parameters":  TVroot_procedures$_parameters$_type_func$_parameters<Annotation>
    readonly "returnType":  TVroot_procedures$_parameters$_type_func$_returnType<Annotation>
}
export type TVroot_procedures$_parameters$_type_func$<Annotation> = TVTroot_procedures$_parameters$_type_func$<Annotation>

export type TNroot_procedures$_parameters$_type_func$<Annotation> = TAnnotatedType<Annotation, TVroot_procedures$_parameters$_type_func$<Annotation>>
export type TVTroot_procedures$_parameters$_type_func<Annotation> = TNroot_procedures$_parameters$_type_func$<Annotation>
export type TVroot_procedures$_parameters$_type_func<Annotation> = TVTroot_procedures$_parameters$_type_func<Annotation>

export type TNroot_procedures$_parameters$_type_typeReference$_name$_context$<Annotation> = TAnnotatedString<Annotation>
export type TVTroot_procedures$_parameters$_type_typeReference$_name$_context<Annotation> = TNroot_procedures$_parameters$_type_typeReference$_name$_context$<Annotation>
export type TVroot_procedures$_parameters$_type_typeReference$_name$_context<Annotation> = TVTroot_procedures$_parameters$_type_typeReference$_name$_context<Annotation>

export type TNroot_procedures$_parameters$_type_typeReference$_name$_type$<Annotation> = TAnnotatedString<Annotation>
export type TVTroot_procedures$_parameters$_type_typeReference$_name$_type<Annotation> = TNroot_procedures$_parameters$_type_typeReference$_name$_type$<Annotation>
export type TVroot_procedures$_parameters$_type_typeReference$_name$_type<Annotation> = TVTroot_procedures$_parameters$_type_typeReference$_name$_type<Annotation>
export type TVTroot_procedures$_parameters$_type_typeReference$_name$<Annotation> = {
    readonly "context":  TVroot_procedures$_parameters$_type_typeReference$_name$_context<Annotation>
    readonly "type":  TVroot_procedures$_parameters$_type_typeReference$_name$_type<Annotation>
}
export type TVroot_procedures$_parameters$_type_typeReference$_name$<Annotation> = TVTroot_procedures$_parameters$_type_typeReference$_name$<Annotation>

export type TNroot_procedures$_parameters$_type_typeReference$_name$<Annotation> = TAnnotatedType<Annotation, TVroot_procedures$_parameters$_type_typeReference$_name$<Annotation>>
export type TVTroot_procedures$_parameters$_type_typeReference$_name<Annotation> = TNroot_procedures$_parameters$_type_typeReference$_name$<Annotation>
export type TVroot_procedures$_parameters$_type_typeReference$_name<Annotation> = TVTroot_procedures$_parameters$_type_typeReference$_name<Annotation>
export type TVTroot_procedures$_parameters$_type_typeReference$<Annotation> = {
    readonly "name":  TVroot_procedures$_parameters$_type_typeReference$_name<Annotation>
}
export type TVroot_procedures$_parameters$_type_typeReference$<Annotation> = TVTroot_procedures$_parameters$_type_typeReference$<Annotation>

export type TNroot_procedures$_parameters$_type_typeReference$<Annotation> = TAnnotatedType<Annotation, TVroot_procedures$_parameters$_type_typeReference$<Annotation>>
export type TVTroot_procedures$_parameters$_type_typeReference<Annotation> = TNroot_procedures$_parameters$_type_typeReference$<Annotation>
export type TVroot_procedures$_parameters$_type_typeReference<Annotation> = TVTroot_procedures$_parameters$_type_typeReference<Annotation>
export type TVTroot_procedures$_parameters$_type<Annotation> =
    | [ "func", TVroot_procedures$_parameters$_type_func<Annotation>]
    | [ "typeReference", TVroot_procedures$_parameters$_type_typeReference<Annotation>]
export type TVroot_procedures$_parameters$_type<Annotation> = TVTroot_procedures$_parameters$_type<Annotation>
export type TVTroot_procedures$_parameters$<Annotation> = {
    readonly "name":  TVroot_procedures$_parameters$_name<Annotation>
    readonly "type":  TVroot_procedures$_parameters$_type<Annotation>
}
export type TVroot_procedures$_parameters$<Annotation> = TVTroot_procedures$_parameters$<Annotation>

export type TNroot_procedures$_parameters$<Annotation> = TAnnotatedType<Annotation, TVroot_procedures$_parameters$<Annotation>>
export type TVTroot_procedures$_parameters<Annotation> = TNroot_procedures$_parameters$<Annotation>
export type TVroot_procedures$_parameters<Annotation> = TVTroot_procedures$_parameters<Annotation>[]
export type TVTroot_procedures$_returnType$_referencedType_identifier<Annotation> = TGidentifier<Annotation>
export type TVroot_procedures$_returnType$_referencedType_identifier<Annotation> = TVTroot_procedures$_returnType$_referencedType_identifier<Annotation>
export type TVTroot_procedures$_returnType$_referencedType_qualifiedName$_context<Annotation> = TGidentifier<Annotation>
export type TVroot_procedures$_returnType$_referencedType_qualifiedName$_context<Annotation> = TVTroot_procedures$_returnType$_referencedType_qualifiedName$_context<Annotation>
export type TVTroot_procedures$_returnType$_referencedType_qualifiedName$_type<Annotation> = TGidentifier<Annotation>
export type TVroot_procedures$_returnType$_referencedType_qualifiedName$_type<Annotation> = TVTroot_procedures$_returnType$_referencedType_qualifiedName$_type<Annotation>
export type TVTroot_procedures$_returnType$_referencedType_qualifiedName$<Annotation> = {
    readonly "context":  TVroot_procedures$_returnType$_referencedType_qualifiedName$_context<Annotation>
    readonly "type":  TVroot_procedures$_returnType$_referencedType_qualifiedName$_type<Annotation>
}
export type TVroot_procedures$_returnType$_referencedType_qualifiedName$<Annotation> = TVTroot_procedures$_returnType$_referencedType_qualifiedName$<Annotation>

export type TNroot_procedures$_returnType$_referencedType_qualifiedName$<Annotation> = TAnnotatedType<Annotation, TVroot_procedures$_returnType$_referencedType_qualifiedName$<Annotation>>
export type TVTroot_procedures$_returnType$_referencedType_qualifiedName<Annotation> = TNroot_procedures$_returnType$_referencedType_qualifiedName$<Annotation>
export type TVroot_procedures$_returnType$_referencedType_qualifiedName<Annotation> = TVTroot_procedures$_returnType$_referencedType_qualifiedName<Annotation>
export type TVTroot_procedures$_returnType$_referencedType<Annotation> =
    | [ "identifier", TVroot_procedures$_returnType$_referencedType_identifier<Annotation>]
    | [ "qualifiedName", TVroot_procedures$_returnType$_referencedType_qualifiedName<Annotation>]
export type TVroot_procedures$_returnType$_referencedType<Annotation> = TVTroot_procedures$_returnType$_referencedType<Annotation>
export type TVTroot_procedures$_returnType$_typeArguments<Annotation> = TGtype<Annotation>
export type TVroot_procedures$_returnType$_typeArguments<Annotation> = TVTroot_procedures$_returnType$_typeArguments<Annotation>[]
export type TVTroot_procedures$_returnType$<Annotation> = {
    readonly "referencedType":  TVroot_procedures$_returnType$_referencedType<Annotation>
    readonly "typeArguments":  TVroot_procedures$_returnType$_typeArguments<Annotation>
}
export type TVroot_procedures$_returnType$<Annotation> = TVTroot_procedures$_returnType$<Annotation>

export type TNroot_procedures$_returnType$<Annotation> = TAnnotatedType<Annotation, TVroot_procedures$_returnType$<Annotation>>
export type TVTroot_procedures$_returnType<Annotation> = TNroot_procedures$_returnType$<Annotation>
export type TVroot_procedures$_returnType<Annotation> = TVTroot_procedures$_returnType<Annotation>
export type TVTroot_procedures$_block$_returnStatement$<Annotation> = TGinitialization<Annotation>
export type TVroot_procedures$_block$_returnStatement$<Annotation> = TVTroot_procedures$_block$_returnStatement$<Annotation>

export type TNroot_procedures$_block$_returnStatement$<Annotation> = TAnnotatedType<Annotation, TVroot_procedures$_block$_returnStatement$<Annotation>>
export type TVTroot_procedures$_block$_returnStatement<Annotation> = TNroot_procedures$_block$_returnStatement$<Annotation>
export type TVroot_procedures$_block$_returnStatement<Annotation> = TVTroot_procedures$_block$_returnStatement<Annotation>
export type TVTroot_procedures$_block$<Annotation> = {
    readonly "returnStatement":  TVroot_procedures$_block$_returnStatement<Annotation>
}
export type TVroot_procedures$_block$<Annotation> = TVTroot_procedures$_block$<Annotation>

export type TNroot_procedures$_block$<Annotation> = TAnnotatedType<Annotation, TVroot_procedures$_block$<Annotation>>
export type TVTroot_procedures$_block<Annotation> = TNroot_procedures$_block$<Annotation>
export type TVroot_procedures$_block<Annotation> = TVTroot_procedures$_block<Annotation>
export type TVTroot_procedures$<Annotation> = {
    readonly "export":  TVroot_procedures$_export<Annotation>
    readonly "name":  TVroot_procedures$_name<Annotation>
    readonly "typeParameters":  TVroot_procedures$_typeParameters<Annotation>
    readonly "parameters":  TVroot_procedures$_parameters<Annotation>
    readonly "returnType":  TVroot_procedures$_returnType<Annotation>
    readonly "block":  TVroot_procedures$_block<Annotation>
}
export type TVroot_procedures$<Annotation> = TVTroot_procedures$<Annotation>

export type TNroot_procedures$<Annotation> = TAnnotatedType<Annotation, TVroot_procedures$<Annotation>>
export type TVTroot_procedures<Annotation> = TNroot_procedures$<Annotation>
export type TVroot_procedures<Annotation> = TVTroot_procedures<Annotation>[]

export type TNroot_endOfFile$<Annotation> = Annotation
export type TVTroot_endOfFile<Annotation> = TNroot_endOfFile$<Annotation>
export type TVroot_endOfFile<Annotation> = TVTroot_endOfFile<Annotation>
export type TVTroot<Annotation> = {
    readonly "imports":  TVroot_imports<Annotation>
    readonly "procedures":  TVroot_procedures<Annotation>
    readonly "endOfFile":  TVroot_endOfFile<Annotation>
}
export type TVroot<Annotation> = TVTroot<Annotation>

export type TNroot<Annotation> = TAnnotatedType<Annotation, TVroot<Annotation>>
export type TRoot<Annotation> = TNroot<Annotation>