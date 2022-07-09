import * as pr from "pareto-runtime"
import * as api from "../../interface/types/ts_api"

export type IVisitor<Annotation> = {
    readonly "$block/*Block/.variables/*VariableStatement/*VariableDeclarationList/*VariableDeclaration"?: {
        readonly "begin": ($: api.TNGblock$_variables$$$<Annotation>) => void,
        readonly "end": ($: api.TNGblock$_variables$$$<Annotation>) => void,
    }
    readonly "$block/*Block/.variables/*VariableStatement/*VariableDeclarationList"?: {
        readonly "begin": ($: api.TNGblock$_variables$$<Annotation>) => void,
        readonly "end": ($: api.TNGblock$_variables$$<Annotation>) => void,
    }
    readonly "$block/*Block/.variables/*VariableStatement"?: {
        readonly "begin": ($: api.TNGblock$_variables$<Annotation>) => void,
        readonly "end": ($: api.TNGblock$_variables$<Annotation>) => void,
    }
    readonly "$block/*Block/.nestedProcedures/*FunctionDeclaration/.void/*VoidKeyword"?: ($: api.TNGblock$_nestedProcedures$_void$<Annotation>) => void
    readonly "$block/*Block/.nestedProcedures/*FunctionDeclaration"?: {
        readonly "begin": ($: api.TNGblock$_nestedProcedures$<Annotation>) => void,
        readonly "end": ($: api.TNGblock$_nestedProcedures$<Annotation>) => void,
    }
    readonly "$block/*Block/.statements/?expressionStatement/*ExpressionStatement/?binaryExpression/*BinaryExpression/.operator/?equalsToken/*EqualsToken"?: ($: api.TNGblock$_statements_expressionStatement$_binaryExpression$_operator_equalsToken$<Annotation>) => void
    readonly "$block/*Block/.statements/?expressionStatement/*ExpressionStatement/?binaryExpression/*BinaryExpression/.operator/?plusEqualsToken/*PlusEqualsToken"?: ($: api.TNGblock$_statements_expressionStatement$_binaryExpression$_operator_plusEqualsToken$<Annotation>) => void
    readonly "$block/*Block/.statements/?expressionStatement/*ExpressionStatement/?binaryExpression/*BinaryExpression"?: {
        readonly "begin": ($: api.TNGblock$_statements_expressionStatement$_binaryExpression$<Annotation>) => void,
        readonly "end": ($: api.TNGblock$_statements_expressionStatement$_binaryExpression$<Annotation>) => void,
    }
    readonly "$block/*Block/.statements/?expressionStatement/*ExpressionStatement/?call/*CallExpression"?: {
        readonly "begin": ($: api.TNGblock$_statements_expressionStatement$_call$<Annotation>) => void,
        readonly "end": ($: api.TNGblock$_statements_expressionStatement$_call$<Annotation>) => void,
    }
    readonly "$block/*Block/.statements/?expressionStatement/*ExpressionStatement"?: {
        readonly "begin": ($: api.TNGblock$_statements_expressionStatement$<Annotation>) => void,
        readonly "end": ($: api.TNGblock$_statements_expressionStatement$<Annotation>) => void,
    }
    readonly "$block/*Block/.statements/?ifStatement/*IfStatement"?: {
        readonly "begin": ($: api.TNGblock$_statements_ifStatement$<Annotation>) => void,
        readonly "end": ($: api.TNGblock$_statements_ifStatement$<Annotation>) => void,
    }
    readonly "$block/*Block"?: {
        readonly "begin": ($: api.TNGblock$<Annotation>) => void,
        readonly "end": ($: api.TNGblock$<Annotation>) => void,
    }
    readonly "$booleanExpression/?binaryExpression/*BinaryExpression/.operator/?notEqual/*ExclamationEqualsEqualsToken"?: ($: api.TNGbooleanExpression_binaryExpression$_operator_notEqual$<Annotation>) => void
    readonly "$booleanExpression/?binaryExpression/*BinaryExpression/.right/*NullKeyword"?: ($: api.TNGbooleanExpression_binaryExpression$_right$<Annotation>) => void
    readonly "$booleanExpression/?binaryExpression/*BinaryExpression"?: {
        readonly "begin": ($: api.TNGbooleanExpression_binaryExpression$<Annotation>) => void,
        readonly "end": ($: api.TNGbooleanExpression_binaryExpression$<Annotation>) => void,
    }
    readonly "$booleanExpression/?prefixUnaryExpression/*PrefixUnaryExpression"?: {
        readonly "begin": ($: api.TNGbooleanExpression_prefixUnaryExpression$<Annotation>) => void,
        readonly "end": ($: api.TNGbooleanExpression_prefixUnaryExpression$<Annotation>) => void,
    }
    readonly "$callback/*Parameter/.type/*FunctionType/.parameter/*Parameter"?: {
        readonly "begin": ($: api.TNGcallback$_type$_parameter$<Annotation>) => void,
        readonly "end": ($: api.TNGcallback$_type$_parameter$<Annotation>) => void,
    }
    readonly "$callback/*Parameter/.type/*FunctionType/.void/*VoidKeyword"?: ($: api.TNGcallback$_type$_void$<Annotation>) => void
    readonly "$callback/*Parameter/.type/*FunctionType"?: {
        readonly "begin": ($: api.TNGcallback$_type$<Annotation>) => void,
        readonly "end": ($: api.TNGcallback$_type$<Annotation>) => void,
    }
    readonly "$callback/*Parameter"?: {
        readonly "begin": ($: api.TNGcallback$<Annotation>) => void,
        readonly "end": ($: api.TNGcallback$<Annotation>) => void,
    }
    readonly "$identifier/*Identifier"?: ($: api.TNGidentifier$<Annotation>) => void
    readonly "$interface/?function/*FunctionType/.dataParameter/*Parameter"?: {
        readonly "begin": ($: api.TNGinterface_function$_dataParameter$<Annotation>) => void,
        readonly "end": ($: api.TNGinterface_function$_dataParameter$<Annotation>) => void,
    }
    readonly "$interface/?function/*FunctionType/.void/*VoidKeyword"?: ($: api.TNGinterface_function$_void$<Annotation>) => void
    readonly "$interface/?function/*FunctionType"?: {
        readonly "begin": ($: api.TNGinterface_function$<Annotation>) => void,
        readonly "end": ($: api.TNGinterface_function$<Annotation>) => void,
    }
    readonly "$interface/?typeLiteral/*TypeLiteral/*PropertySignature/.readonly/*ReadonlyKeyword"?: ($: api.TNGinterface_typeLiteral$$_readonly$<Annotation>) => void
    readonly "$interface/?typeLiteral/*TypeLiteral/*PropertySignature/.name/*StringLiteral"?: ($: api.TNGinterface_typeLiteral$$_name$<Annotation>) => void
    readonly "$interface/?typeLiteral/*TypeLiteral/*PropertySignature/.questionToken/*QuestionToken"?: ($: api.TNGinterface_typeLiteral$$_questionToken$<Annotation>) => void
    readonly "$interface/?typeLiteral/*TypeLiteral/*PropertySignature"?: {
        readonly "begin": ($: api.TNGinterface_typeLiteral$$<Annotation>) => void,
        readonly "end": ($: api.TNGinterface_typeLiteral$$<Annotation>) => void,
    }
    readonly "$interface/?typeLiteral/*TypeLiteral"?: {
        readonly "begin": ($: api.TNGinterface_typeLiteral$<Annotation>) => void,
        readonly "end": ($: api.TNGinterface_typeLiteral$<Annotation>) => void,
    }
    readonly "$interface/?typeReference/*TypeReference"?: {
        readonly "begin": ($: api.TNGinterface_typeReference$<Annotation>) => void,
        readonly "end": ($: api.TNGinterface_typeReference$<Annotation>) => void,
    }
    readonly "$initialization/?temlateExpression/*TemplateExpression/.head/*TemplateHead"?: ($: api.TNGinitialization_temlateExpression$_head$<Annotation>) => void
    readonly "$initialization/?temlateExpression/*TemplateExpression/.span/*TemplateSpan/.x/?middle/*TemplateMiddle"?: ($: api.TNGinitialization_temlateExpression$_span$_x_middle$<Annotation>) => void
    readonly "$initialization/?temlateExpression/*TemplateExpression/.span/*TemplateSpan/.x/?tail/*TemplateTail"?: ($: api.TNGinitialization_temlateExpression$_span$_x_tail$<Annotation>) => void
    readonly "$initialization/?temlateExpression/*TemplateExpression/.span/*TemplateSpan"?: {
        readonly "begin": ($: api.TNGinitialization_temlateExpression$_span$<Annotation>) => void,
        readonly "end": ($: api.TNGinitialization_temlateExpression$_span$<Annotation>) => void,
    }
    readonly "$initialization/?temlateExpression/*TemplateExpression"?: {
        readonly "begin": ($: api.TNGinitialization_temlateExpression$<Annotation>) => void,
        readonly "end": ($: api.TNGinitialization_temlateExpression$<Annotation>) => void,
    }
    readonly "$initialization/?binaryExpression/*BinaryExpression/.operator/?PlusToken/*PlusToken"?: ($: api.TNGinitialization_binaryExpression$_operator_PlusToken$<Annotation>) => void
    readonly "$initialization/?binaryExpression/*BinaryExpression"?: {
        readonly "begin": ($: api.TNGinitialization_binaryExpression$<Annotation>) => void,
        readonly "end": ($: api.TNGinitialization_binaryExpression$<Annotation>) => void,
    }
    readonly "$initialization/?functionImplementation/*ArrowFunction/.equalsGreaterThan/*EqualsGreaterThanToken"?: ($: api.TNGinitialization_functionImplementation$_equalsGreaterThan$<Annotation>) => void
    readonly "$initialization/?functionImplementation/*ArrowFunction"?: {
        readonly "begin": ($: api.TNGinitialization_functionImplementation$<Annotation>) => void,
        readonly "end": ($: api.TNGinitialization_functionImplementation$<Annotation>) => void,
    }
    readonly "$initialization/?objectLiteral/*ObjectLiteralExpression/*PropertyAssignment/.name/*StringLiteral"?: ($: api.TNGinitialization_objectLiteral$$_name$<Annotation>) => void
    readonly "$initialization/?objectLiteral/*ObjectLiteralExpression/*PropertyAssignment"?: {
        readonly "begin": ($: api.TNGinitialization_objectLiteral$$<Annotation>) => void,
        readonly "end": ($: api.TNGinitialization_objectLiteral$$<Annotation>) => void,
    }
    readonly "$initialization/?objectLiteral/*ObjectLiteralExpression"?: {
        readonly "begin": ($: api.TNGinitialization_objectLiteral$<Annotation>) => void,
        readonly "end": ($: api.TNGinitialization_objectLiteral$<Annotation>) => void,
    }
    readonly "$literalDataInitialization/?state/*ArrayLiteralExpression/.state/*StringLiteral"?: ($: api.TNGliteralDataInitialization_state$_state$<Annotation>) => void
    readonly "$literalDataInitialization/?state/*ArrayLiteralExpression"?: {
        readonly "begin": ($: api.TNGliteralDataInitialization_state$<Annotation>) => void,
        readonly "end": ($: api.TNGliteralDataInitialization_state$<Annotation>) => void,
    }
    readonly "$literalDataInitialization/?false/*FalseKeyword"?: ($: api.TNGliteralDataInitialization_false$<Annotation>) => void
    readonly "$literalDataInitialization/?stringLiteral/*NoSubstitutionTemplateLiteral"?: ($: api.TNGliteralDataInitialization_stringLiteral$<Annotation>) => void
    readonly "$literalDataInitialization/?numericLiteral/*NumericLiteral"?: ($: api.TNGliteralDataInitialization_numericLiteral$<Annotation>) => void
    readonly "$literalDataInitialization/?null/*NullKeyword"?: ($: api.TNGliteralDataInitialization_null$<Annotation>) => void
    readonly "$literalDataInitialization/?true/*TrueKeyword"?: ($: api.TNGliteralDataInitialization_true$<Annotation>) => void
    readonly "$literalDataInitialization/?array/*ParenthesizedExpression/*ArrayLiteralExpression"?: {
        readonly "begin": ($: api.TNGliteralDataInitialization_array$$<Annotation>) => void,
        readonly "end": ($: api.TNGliteralDataInitialization_array$$<Annotation>) => void,
    }
    readonly "$literalDataInitialization/?array/*ParenthesizedExpression"?: {
        readonly "begin": ($: api.TNGliteralDataInitialization_array$<Annotation>) => void,
        readonly "end": ($: api.TNGliteralDataInitialization_array$<Annotation>) => void,
    }
    readonly "$parameterTriplet/.dataParameter/*Parameter"?: {
        readonly "begin": ($: api.TNGparameterTriplet_dataParameter$<Annotation>) => void,
        readonly "end": ($: api.TNGparameterTriplet_dataParameter$<Annotation>) => void,
    }
    readonly "$parameterTriplet/.interfaceParameter/*Parameter"?: {
        readonly "begin": ($: api.TNGparameterTriplet_interfaceParameter$<Annotation>) => void,
        readonly "end": ($: api.TNGparameterTriplet_interfaceParameter$<Annotation>) => void,
    }
    readonly "$selection/?call/*CallExpression"?: {
        readonly "begin": ($: api.TNGselection_call$<Annotation>) => void,
        readonly "end": ($: api.TNGselection_call$<Annotation>) => void,
    }
    readonly "$selection/?conditial/*ConditionalExpression/.questionToken/*QuestionToken"?: ($: api.TNGselection_conditial$_questionToken$<Annotation>) => void
    readonly "$selection/?conditial/*ConditionalExpression/.colon/*ColonToken"?: ($: api.TNGselection_conditial$_colon$<Annotation>) => void
    readonly "$selection/?conditial/*ConditionalExpression"?: {
        readonly "begin": ($: api.TNGselection_conditial$<Annotation>) => void,
        readonly "end": ($: api.TNGselection_conditial$<Annotation>) => void,
    }
    readonly "$selection/?propertyAccess/*PropertyAccessExpression"?: {
        readonly "begin": ($: api.TNGselection_propertyAccess$<Annotation>) => void,
        readonly "end": ($: api.TNGselection_propertyAccess$<Annotation>) => void,
    }
    readonly "$type/?array/*ArrayType"?: {
        readonly "begin": ($: api.TNGtype_array$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_array$<Annotation>) => void,
    }
    readonly "$type/?boolean/*BooleanKeyword"?: ($: api.TNGtype_boolean$<Annotation>) => void
    readonly "$type/?string/*StringKeyword"?: ($: api.TNGtype_string$<Annotation>) => void
    readonly "$type/?number/*NumberKeyword"?: ($: api.TNGtype_number$<Annotation>) => void
    readonly "$type/?literalType/*LiteralType/*NullKeyword"?: ($: api.TNGtype_literalType$$<Annotation>) => void
    readonly "$type/?literalType/*LiteralType"?: {
        readonly "begin": ($: api.TNGtype_literalType$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_literalType$<Annotation>) => void,
    }
    readonly "$type/?typeLiteral/*TypeLiteral/?index/*IndexSignature/.key/*Parameter/.type/*StringKeyword"?: ($: api.TNGtype_typeLiteral$_index$_key$_type$<Annotation>) => void
    readonly "$type/?typeLiteral/*TypeLiteral/?index/*IndexSignature/.key/*Parameter"?: {
        readonly "begin": ($: api.TNGtype_typeLiteral$_index$_key$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_typeLiteral$_index$_key$<Annotation>) => void,
    }
    readonly "$type/?typeLiteral/*TypeLiteral/?index/*IndexSignature"?: {
        readonly "begin": ($: api.TNGtype_typeLiteral$_index$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_typeLiteral$_index$<Annotation>) => void,
    }
    readonly "$type/?typeLiteral/*TypeLiteral/?properties/*PropertySignature/.readonly/*ReadonlyKeyword"?: ($: api.TNGtype_typeLiteral$_properties$_readonly$<Annotation>) => void
    readonly "$type/?typeLiteral/*TypeLiteral/?properties/*PropertySignature/.name/*StringLiteral"?: ($: api.TNGtype_typeLiteral$_properties$_name$<Annotation>) => void
    readonly "$type/?typeLiteral/*TypeLiteral/?properties/*PropertySignature/.questionToken/*QuestionToken"?: ($: api.TNGtype_typeLiteral$_properties$_questionToken$<Annotation>) => void
    readonly "$type/?typeLiteral/*TypeLiteral/?properties/*PropertySignature"?: {
        readonly "begin": ($: api.TNGtype_typeLiteral$_properties$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_typeLiteral$_properties$<Annotation>) => void,
    }
    readonly "$type/?typeLiteral/*TypeLiteral"?: {
        readonly "begin": ($: api.TNGtype_typeLiteral$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_typeLiteral$<Annotation>) => void,
    }
    readonly "$type/?typeReference/*TypeReference/.referencedType/?qualifiedName/*QualifiedName"?: {
        readonly "begin": ($: api.TNGtype_typeReference$_referencedType_qualifiedName$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_typeReference$_referencedType_qualifiedName$<Annotation>) => void,
    }
    readonly "$type/?typeReference/*TypeReference"?: {
        readonly "begin": ($: api.TNGtype_typeReference$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_typeReference$<Annotation>) => void,
    }
    readonly "$type/?union/*UnionType/*TupleType/.state/*LiteralType/*StringLiteral"?: ($: api.TNGtype_union$$_state$$<Annotation>) => void
    readonly "$type/?union/*UnionType/*TupleType/.state/*LiteralType"?: {
        readonly "begin": ($: api.TNGtype_union$$_state$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_union$$_state$<Annotation>) => void,
    }
    readonly "$type/?union/*UnionType/*TupleType"?: {
        readonly "begin": ($: api.TNGtype_union$$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_union$$<Annotation>) => void,
    }
    readonly "$type/?union/*UnionType"?: {
        readonly "begin": ($: api.TNGtype_union$<Annotation>) => void,
        readonly "end": ($: api.TNGtype_union$<Annotation>) => void,
    }
    readonly "$typelessParameter/*Parameter"?: {
        readonly "begin": ($: api.TNGtypelessParameter$<Annotation>) => void,
        readonly "end": ($: api.TNGtypelessParameter$<Annotation>) => void,
    }
    readonly "/.imports/*ImportDeclaration/.clause/*ImportClause/?namespace/*NamespaceImport"?: {
        readonly "begin": ($: api.TNroot_imports$_clause$_namespace$<Annotation>) => void,
        readonly "end": ($: api.TNroot_imports$_clause$_namespace$<Annotation>) => void,
    }
    readonly "/.imports/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports/*ImportSpecifier"?: {
        readonly "begin": ($: api.TNroot_imports$_clause$_named$$<Annotation>) => void,
        readonly "end": ($: api.TNroot_imports$_clause$_named$$<Annotation>) => void,
    }
    readonly "/.imports/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports"?: {
        readonly "begin": ($: api.TNroot_imports$_clause$_named$<Annotation>) => void,
        readonly "end": ($: api.TNroot_imports$_clause$_named$<Annotation>) => void,
    }
    readonly "/.imports/*ImportDeclaration/.clause/*ImportClause"?: {
        readonly "begin": ($: api.TNroot_imports$_clause$<Annotation>) => void,
        readonly "end": ($: api.TNroot_imports$_clause$<Annotation>) => void,
    }
    readonly "/.imports/*ImportDeclaration/.file/*StringLiteral"?: ($: api.TNroot_imports$_file$<Annotation>) => void
    readonly "/.imports/*ImportDeclaration"?: {
        readonly "begin": ($: api.TNroot_imports$<Annotation>) => void,
        readonly "end": ($: api.TNroot_imports$<Annotation>) => void,
    }
    readonly "/.procedures/*FunctionDeclaration/.export/*ExportKeyword"?: ($: api.TNroot_procedures$_export$<Annotation>) => void
    readonly "/.procedures/*FunctionDeclaration/.typeParameters/*TypeParameter"?: {
        readonly "begin": ($: api.TNroot_procedures$_typeParameters$<Annotation>) => void,
        readonly "end": ($: api.TNroot_procedures$_typeParameters$<Annotation>) => void,
    }
    readonly "/.procedures/*FunctionDeclaration/.parameters/*Parameter/.type/?func/*FunctionType/.parameters/*Parameter"?: {
        readonly "begin": ($: api.TNroot_procedures$_parameters$_type_func$_parameters$<Annotation>) => void,
        readonly "end": ($: api.TNroot_procedures$_parameters$_type_func$_parameters$<Annotation>) => void,
    }
    readonly "/.procedures/*FunctionDeclaration/.parameters/*Parameter/.type/?func/*FunctionType"?: {
        readonly "begin": ($: api.TNroot_procedures$_parameters$_type_func$<Annotation>) => void,
        readonly "end": ($: api.TNroot_procedures$_parameters$_type_func$<Annotation>) => void,
    }
    readonly "/.procedures/*FunctionDeclaration/.parameters/*Parameter/.type/?typeReference/*TypeReference/.name/*QualifiedName/.context/*Identifier"?: ($: api.TNroot_procedures$_parameters$_type_typeReference$_name$_context$<Annotation>) => void
    readonly "/.procedures/*FunctionDeclaration/.parameters/*Parameter/.type/?typeReference/*TypeReference/.name/*QualifiedName/.type/*Identifier"?: ($: api.TNroot_procedures$_parameters$_type_typeReference$_name$_type$<Annotation>) => void
    readonly "/.procedures/*FunctionDeclaration/.parameters/*Parameter/.type/?typeReference/*TypeReference/.name/*QualifiedName"?: {
        readonly "begin": ($: api.TNroot_procedures$_parameters$_type_typeReference$_name$<Annotation>) => void,
        readonly "end": ($: api.TNroot_procedures$_parameters$_type_typeReference$_name$<Annotation>) => void,
    }
    readonly "/.procedures/*FunctionDeclaration/.parameters/*Parameter/.type/?typeReference/*TypeReference"?: {
        readonly "begin": ($: api.TNroot_procedures$_parameters$_type_typeReference$<Annotation>) => void,
        readonly "end": ($: api.TNroot_procedures$_parameters$_type_typeReference$<Annotation>) => void,
    }
    readonly "/.procedures/*FunctionDeclaration/.parameters/*Parameter"?: {
        readonly "begin": ($: api.TNroot_procedures$_parameters$<Annotation>) => void,
        readonly "end": ($: api.TNroot_procedures$_parameters$<Annotation>) => void,
    }
    readonly "/.procedures/*FunctionDeclaration/.returnType/*TypeReference/.referencedType/?qualifiedName/*QualifiedName"?: {
        readonly "begin": ($: api.TNroot_procedures$_returnType$_referencedType_qualifiedName$<Annotation>) => void,
        readonly "end": ($: api.TNroot_procedures$_returnType$_referencedType_qualifiedName$<Annotation>) => void,
    }
    readonly "/.procedures/*FunctionDeclaration/.returnType/*TypeReference"?: {
        readonly "begin": ($: api.TNroot_procedures$_returnType$<Annotation>) => void,
        readonly "end": ($: api.TNroot_procedures$_returnType$<Annotation>) => void,
    }
    readonly "/.procedures/*FunctionDeclaration/.block/*Block/.returnStatement/*ReturnStatement"?: {
        readonly "begin": ($: api.TNroot_procedures$_block$_returnStatement$<Annotation>) => void,
        readonly "end": ($: api.TNroot_procedures$_block$_returnStatement$<Annotation>) => void,
    }
    readonly "/.procedures/*FunctionDeclaration/.block/*Block"?: {
        readonly "begin": ($: api.TNroot_procedures$_block$<Annotation>) => void,
        readonly "end": ($: api.TNroot_procedures$_block$<Annotation>) => void,
    }
    readonly "/.procedures/*FunctionDeclaration"?: {
        readonly "begin": ($: api.TNroot_procedures$<Annotation>) => void,
        readonly "end": ($: api.TNroot_procedures$<Annotation>) => void,
    }
    readonly "/.endOfFile/*EndOfFileToken"?: ($: api.TNroot_endOfFile$<Annotation>) => void
    readonly ""?: {
        readonly "begin": ($: api.TNroot<Annotation>) => void,
        readonly "end": ($: api.TNroot<Annotation>) => void,
    }
}