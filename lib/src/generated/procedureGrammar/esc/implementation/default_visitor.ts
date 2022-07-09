import * as pr from "pareto-runtime"
import * as f from "../../interface/interfaces/visitor"

export function createDefaultVisistor(): f.IVisitor<string> {
    return {
        "$block/*Block/.variables/*VariableStatement/*VariableDeclarationList/*VariableDeclaration": {
            begin: ($) => { console.log("$block/*Block/.variables/*VariableStatement/*VariableDeclarationList/*VariableDeclaration begin") },
            end: ($) => { console.log("$block/*Block/.variables/*VariableStatement/*VariableDeclarationList/*VariableDeclaration end") },
        },
        "$block/*Block/.variables/*VariableStatement/*VariableDeclarationList": {
            begin: ($) => { console.log("$block/*Block/.variables/*VariableStatement/*VariableDeclarationList begin") },
            end: ($) => { console.log("$block/*Block/.variables/*VariableStatement/*VariableDeclarationList end") },
        },
        "$block/*Block/.variables/*VariableStatement": {
            begin: ($) => { console.log("$block/*Block/.variables/*VariableStatement begin") },
            end: ($) => { console.log("$block/*Block/.variables/*VariableStatement end") },
        },
        "$block/*Block/.nestedProcedures/*FunctionDeclaration/.void/*VoidKeyword": ($) => { console.log("$block/*Block/.nestedProcedures/*FunctionDeclaration/.void/*VoidKeyword") },
        "$block/*Block/.nestedProcedures/*FunctionDeclaration": {
            begin: ($) => { console.log("$block/*Block/.nestedProcedures/*FunctionDeclaration begin") },
            end: ($) => { console.log("$block/*Block/.nestedProcedures/*FunctionDeclaration end") },
        },
        "$block/*Block/.statements/?expressionStatement/*ExpressionStatement/?binaryExpression/*BinaryExpression/.operator/?equalsToken/*EqualsToken": ($) => { console.log("$block/*Block/.statements/?expressionStatement/*ExpressionStatement/?binaryExpression/*BinaryExpression/.operator/?equalsToken/*EqualsToken") },
        "$block/*Block/.statements/?expressionStatement/*ExpressionStatement/?binaryExpression/*BinaryExpression/.operator/?plusEqualsToken/*PlusEqualsToken": ($) => { console.log("$block/*Block/.statements/?expressionStatement/*ExpressionStatement/?binaryExpression/*BinaryExpression/.operator/?plusEqualsToken/*PlusEqualsToken") },
        "$block/*Block/.statements/?expressionStatement/*ExpressionStatement/?binaryExpression/*BinaryExpression": {
            begin: ($) => { console.log("$block/*Block/.statements/?expressionStatement/*ExpressionStatement/?binaryExpression/*BinaryExpression begin") },
            end: ($) => { console.log("$block/*Block/.statements/?expressionStatement/*ExpressionStatement/?binaryExpression/*BinaryExpression end") },
        },
        "$block/*Block/.statements/?expressionStatement/*ExpressionStatement/?call/*CallExpression": {
            begin: ($) => { console.log("$block/*Block/.statements/?expressionStatement/*ExpressionStatement/?call/*CallExpression begin") },
            end: ($) => { console.log("$block/*Block/.statements/?expressionStatement/*ExpressionStatement/?call/*CallExpression end") },
        },
        "$block/*Block/.statements/?expressionStatement/*ExpressionStatement": {
            begin: ($) => { console.log("$block/*Block/.statements/?expressionStatement/*ExpressionStatement begin") },
            end: ($) => { console.log("$block/*Block/.statements/?expressionStatement/*ExpressionStatement end") },
        },
        "$block/*Block/.statements/?ifStatement/*IfStatement": {
            begin: ($) => { console.log("$block/*Block/.statements/?ifStatement/*IfStatement begin") },
            end: ($) => { console.log("$block/*Block/.statements/?ifStatement/*IfStatement end") },
        },
        "$block/*Block": {
            begin: ($) => { console.log("$block/*Block begin") },
            end: ($) => { console.log("$block/*Block end") },
        },
        "$booleanExpression/?binaryExpression/*BinaryExpression/.operator/?notEqual/*ExclamationEqualsEqualsToken": ($) => { console.log("$booleanExpression/?binaryExpression/*BinaryExpression/.operator/?notEqual/*ExclamationEqualsEqualsToken") },
        "$booleanExpression/?binaryExpression/*BinaryExpression/.right/*NullKeyword": ($) => { console.log("$booleanExpression/?binaryExpression/*BinaryExpression/.right/*NullKeyword") },
        "$booleanExpression/?binaryExpression/*BinaryExpression": {
            begin: ($) => { console.log("$booleanExpression/?binaryExpression/*BinaryExpression begin") },
            end: ($) => { console.log("$booleanExpression/?binaryExpression/*BinaryExpression end") },
        },
        "$booleanExpression/?prefixUnaryExpression/*PrefixUnaryExpression": {
            begin: ($) => { console.log("$booleanExpression/?prefixUnaryExpression/*PrefixUnaryExpression begin") },
            end: ($) => { console.log("$booleanExpression/?prefixUnaryExpression/*PrefixUnaryExpression end") },
        },
        "$callback/*Parameter/.type/*FunctionType/.parameter/*Parameter": {
            begin: ($) => { console.log("$callback/*Parameter/.type/*FunctionType/.parameter/*Parameter begin") },
            end: ($) => { console.log("$callback/*Parameter/.type/*FunctionType/.parameter/*Parameter end") },
        },
        "$callback/*Parameter/.type/*FunctionType/.void/*VoidKeyword": ($) => { console.log("$callback/*Parameter/.type/*FunctionType/.void/*VoidKeyword") },
        "$callback/*Parameter/.type/*FunctionType": {
            begin: ($) => { console.log("$callback/*Parameter/.type/*FunctionType begin") },
            end: ($) => { console.log("$callback/*Parameter/.type/*FunctionType end") },
        },
        "$callback/*Parameter": {
            begin: ($) => { console.log("$callback/*Parameter begin") },
            end: ($) => { console.log("$callback/*Parameter end") },
        },
        "$identifier/*Identifier": ($) => { console.log("$identifier/*Identifier") },
        "$interface/?function/*FunctionType/.dataParameter/*Parameter": {
            begin: ($) => { console.log("$interface/?function/*FunctionType/.dataParameter/*Parameter begin") },
            end: ($) => { console.log("$interface/?function/*FunctionType/.dataParameter/*Parameter end") },
        },
        "$interface/?function/*FunctionType/.void/*VoidKeyword": ($) => { console.log("$interface/?function/*FunctionType/.void/*VoidKeyword") },
        "$interface/?function/*FunctionType": {
            begin: ($) => { console.log("$interface/?function/*FunctionType begin") },
            end: ($) => { console.log("$interface/?function/*FunctionType end") },
        },
        "$interface/?typeLiteral/*TypeLiteral/*PropertySignature/.readonly/*ReadonlyKeyword": ($) => { console.log("$interface/?typeLiteral/*TypeLiteral/*PropertySignature/.readonly/*ReadonlyKeyword") },
        "$interface/?typeLiteral/*TypeLiteral/*PropertySignature/.name/*StringLiteral": ($) => { console.log("$interface/?typeLiteral/*TypeLiteral/*PropertySignature/.name/*StringLiteral") },
        "$interface/?typeLiteral/*TypeLiteral/*PropertySignature/.questionToken/*QuestionToken": ($) => { console.log("$interface/?typeLiteral/*TypeLiteral/*PropertySignature/.questionToken/*QuestionToken") },
        "$interface/?typeLiteral/*TypeLiteral/*PropertySignature": {
            begin: ($) => { console.log("$interface/?typeLiteral/*TypeLiteral/*PropertySignature begin") },
            end: ($) => { console.log("$interface/?typeLiteral/*TypeLiteral/*PropertySignature end") },
        },
        "$interface/?typeLiteral/*TypeLiteral": {
            begin: ($) => { console.log("$interface/?typeLiteral/*TypeLiteral begin") },
            end: ($) => { console.log("$interface/?typeLiteral/*TypeLiteral end") },
        },
        "$interface/?typeReference/*TypeReference": {
            begin: ($) => { console.log("$interface/?typeReference/*TypeReference begin") },
            end: ($) => { console.log("$interface/?typeReference/*TypeReference end") },
        },
        "$initialization/?temlateExpression/*TemplateExpression/.head/*TemplateHead": ($) => { console.log("$initialization/?temlateExpression/*TemplateExpression/.head/*TemplateHead") },
        "$initialization/?temlateExpression/*TemplateExpression/.span/*TemplateSpan/.x/?middle/*TemplateMiddle": ($) => { console.log("$initialization/?temlateExpression/*TemplateExpression/.span/*TemplateSpan/.x/?middle/*TemplateMiddle") },
        "$initialization/?temlateExpression/*TemplateExpression/.span/*TemplateSpan/.x/?tail/*TemplateTail": ($) => { console.log("$initialization/?temlateExpression/*TemplateExpression/.span/*TemplateSpan/.x/?tail/*TemplateTail") },
        "$initialization/?temlateExpression/*TemplateExpression/.span/*TemplateSpan": {
            begin: ($) => { console.log("$initialization/?temlateExpression/*TemplateExpression/.span/*TemplateSpan begin") },
            end: ($) => { console.log("$initialization/?temlateExpression/*TemplateExpression/.span/*TemplateSpan end") },
        },
        "$initialization/?temlateExpression/*TemplateExpression": {
            begin: ($) => { console.log("$initialization/?temlateExpression/*TemplateExpression begin") },
            end: ($) => { console.log("$initialization/?temlateExpression/*TemplateExpression end") },
        },
        "$initialization/?binaryExpression/*BinaryExpression/.operator/?PlusToken/*PlusToken": ($) => { console.log("$initialization/?binaryExpression/*BinaryExpression/.operator/?PlusToken/*PlusToken") },
        "$initialization/?binaryExpression/*BinaryExpression": {
            begin: ($) => { console.log("$initialization/?binaryExpression/*BinaryExpression begin") },
            end: ($) => { console.log("$initialization/?binaryExpression/*BinaryExpression end") },
        },
        "$initialization/?functionImplementation/*ArrowFunction/.equalsGreaterThan/*EqualsGreaterThanToken": ($) => { console.log("$initialization/?functionImplementation/*ArrowFunction/.equalsGreaterThan/*EqualsGreaterThanToken") },
        "$initialization/?functionImplementation/*ArrowFunction": {
            begin: ($) => { console.log("$initialization/?functionImplementation/*ArrowFunction begin") },
            end: ($) => { console.log("$initialization/?functionImplementation/*ArrowFunction end") },
        },
        "$initialization/?objectLiteral/*ObjectLiteralExpression/*PropertyAssignment/.name/*StringLiteral": ($) => { console.log("$initialization/?objectLiteral/*ObjectLiteralExpression/*PropertyAssignment/.name/*StringLiteral") },
        "$initialization/?objectLiteral/*ObjectLiteralExpression/*PropertyAssignment": {
            begin: ($) => { console.log("$initialization/?objectLiteral/*ObjectLiteralExpression/*PropertyAssignment begin") },
            end: ($) => { console.log("$initialization/?objectLiteral/*ObjectLiteralExpression/*PropertyAssignment end") },
        },
        "$initialization/?objectLiteral/*ObjectLiteralExpression": {
            begin: ($) => { console.log("$initialization/?objectLiteral/*ObjectLiteralExpression begin") },
            end: ($) => { console.log("$initialization/?objectLiteral/*ObjectLiteralExpression end") },
        },
        "$literalDataInitialization/?state/*ArrayLiteralExpression/.state/*StringLiteral": ($) => { console.log("$literalDataInitialization/?state/*ArrayLiteralExpression/.state/*StringLiteral") },
        "$literalDataInitialization/?state/*ArrayLiteralExpression": {
            begin: ($) => { console.log("$literalDataInitialization/?state/*ArrayLiteralExpression begin") },
            end: ($) => { console.log("$literalDataInitialization/?state/*ArrayLiteralExpression end") },
        },
        "$literalDataInitialization/?false/*FalseKeyword": ($) => { console.log("$literalDataInitialization/?false/*FalseKeyword") },
        "$literalDataInitialization/?stringLiteral/*NoSubstitutionTemplateLiteral": ($) => { console.log("$literalDataInitialization/?stringLiteral/*NoSubstitutionTemplateLiteral") },
        "$literalDataInitialization/?numericLiteral/*NumericLiteral": ($) => { console.log("$literalDataInitialization/?numericLiteral/*NumericLiteral") },
        "$literalDataInitialization/?null/*NullKeyword": ($) => { console.log("$literalDataInitialization/?null/*NullKeyword") },
        "$literalDataInitialization/?true/*TrueKeyword": ($) => { console.log("$literalDataInitialization/?true/*TrueKeyword") },
        "$literalDataInitialization/?array/*ParenthesizedExpression/*ArrayLiteralExpression": {
            begin: ($) => { console.log("$literalDataInitialization/?array/*ParenthesizedExpression/*ArrayLiteralExpression begin") },
            end: ($) => { console.log("$literalDataInitialization/?array/*ParenthesizedExpression/*ArrayLiteralExpression end") },
        },
        "$literalDataInitialization/?array/*ParenthesizedExpression": {
            begin: ($) => { console.log("$literalDataInitialization/?array/*ParenthesizedExpression begin") },
            end: ($) => { console.log("$literalDataInitialization/?array/*ParenthesizedExpression end") },
        },
        "$parameterTriplet/.dataParameter/*Parameter": {
            begin: ($) => { console.log("$parameterTriplet/.dataParameter/*Parameter begin") },
            end: ($) => { console.log("$parameterTriplet/.dataParameter/*Parameter end") },
        },
        "$parameterTriplet/.interfaceParameter/*Parameter": {
            begin: ($) => { console.log("$parameterTriplet/.interfaceParameter/*Parameter begin") },
            end: ($) => { console.log("$parameterTriplet/.interfaceParameter/*Parameter end") },
        },
        "$selection/?call/*CallExpression": {
            begin: ($) => { console.log("$selection/?call/*CallExpression begin") },
            end: ($) => { console.log("$selection/?call/*CallExpression end") },
        },
        "$selection/?conditial/*ConditionalExpression/.questionToken/*QuestionToken": ($) => { console.log("$selection/?conditial/*ConditionalExpression/.questionToken/*QuestionToken") },
        "$selection/?conditial/*ConditionalExpression/.colon/*ColonToken": ($) => { console.log("$selection/?conditial/*ConditionalExpression/.colon/*ColonToken") },
        "$selection/?conditial/*ConditionalExpression": {
            begin: ($) => { console.log("$selection/?conditial/*ConditionalExpression begin") },
            end: ($) => { console.log("$selection/?conditial/*ConditionalExpression end") },
        },
        "$selection/?propertyAccess/*PropertyAccessExpression": {
            begin: ($) => { console.log("$selection/?propertyAccess/*PropertyAccessExpression begin") },
            end: ($) => { console.log("$selection/?propertyAccess/*PropertyAccessExpression end") },
        },
        "$type/?array/*ArrayType": {
            begin: ($) => { console.log("$type/?array/*ArrayType begin") },
            end: ($) => { console.log("$type/?array/*ArrayType end") },
        },
        "$type/?boolean/*BooleanKeyword": ($) => { console.log("$type/?boolean/*BooleanKeyword") },
        "$type/?string/*StringKeyword": ($) => { console.log("$type/?string/*StringKeyword") },
        "$type/?number/*NumberKeyword": ($) => { console.log("$type/?number/*NumberKeyword") },
        "$type/?literalType/*LiteralType/*NullKeyword": ($) => { console.log("$type/?literalType/*LiteralType/*NullKeyword") },
        "$type/?literalType/*LiteralType": {
            begin: ($) => { console.log("$type/?literalType/*LiteralType begin") },
            end: ($) => { console.log("$type/?literalType/*LiteralType end") },
        },
        "$type/?typeLiteral/*TypeLiteral/?index/*IndexSignature/.key/*Parameter/.type/*StringKeyword": ($) => { console.log("$type/?typeLiteral/*TypeLiteral/?index/*IndexSignature/.key/*Parameter/.type/*StringKeyword") },
        "$type/?typeLiteral/*TypeLiteral/?index/*IndexSignature/.key/*Parameter": {
            begin: ($) => { console.log("$type/?typeLiteral/*TypeLiteral/?index/*IndexSignature/.key/*Parameter begin") },
            end: ($) => { console.log("$type/?typeLiteral/*TypeLiteral/?index/*IndexSignature/.key/*Parameter end") },
        },
        "$type/?typeLiteral/*TypeLiteral/?index/*IndexSignature": {
            begin: ($) => { console.log("$type/?typeLiteral/*TypeLiteral/?index/*IndexSignature begin") },
            end: ($) => { console.log("$type/?typeLiteral/*TypeLiteral/?index/*IndexSignature end") },
        },
        "$type/?typeLiteral/*TypeLiteral/?properties/*PropertySignature/.readonly/*ReadonlyKeyword": ($) => { console.log("$type/?typeLiteral/*TypeLiteral/?properties/*PropertySignature/.readonly/*ReadonlyKeyword") },
        "$type/?typeLiteral/*TypeLiteral/?properties/*PropertySignature/.name/*StringLiteral": ($) => { console.log("$type/?typeLiteral/*TypeLiteral/?properties/*PropertySignature/.name/*StringLiteral") },
        "$type/?typeLiteral/*TypeLiteral/?properties/*PropertySignature/.questionToken/*QuestionToken": ($) => { console.log("$type/?typeLiteral/*TypeLiteral/?properties/*PropertySignature/.questionToken/*QuestionToken") },
        "$type/?typeLiteral/*TypeLiteral/?properties/*PropertySignature": {
            begin: ($) => { console.log("$type/?typeLiteral/*TypeLiteral/?properties/*PropertySignature begin") },
            end: ($) => { console.log("$type/?typeLiteral/*TypeLiteral/?properties/*PropertySignature end") },
        },
        "$type/?typeLiteral/*TypeLiteral": {
            begin: ($) => { console.log("$type/?typeLiteral/*TypeLiteral begin") },
            end: ($) => { console.log("$type/?typeLiteral/*TypeLiteral end") },
        },
        "$type/?typeReference/*TypeReference/.referencedType/?qualifiedName/*QualifiedName": {
            begin: ($) => { console.log("$type/?typeReference/*TypeReference/.referencedType/?qualifiedName/*QualifiedName begin") },
            end: ($) => { console.log("$type/?typeReference/*TypeReference/.referencedType/?qualifiedName/*QualifiedName end") },
        },
        "$type/?typeReference/*TypeReference": {
            begin: ($) => { console.log("$type/?typeReference/*TypeReference begin") },
            end: ($) => { console.log("$type/?typeReference/*TypeReference end") },
        },
        "$type/?union/*UnionType/*TupleType/.state/*LiteralType/*StringLiteral": ($) => { console.log("$type/?union/*UnionType/*TupleType/.state/*LiteralType/*StringLiteral") },
        "$type/?union/*UnionType/*TupleType/.state/*LiteralType": {
            begin: ($) => { console.log("$type/?union/*UnionType/*TupleType/.state/*LiteralType begin") },
            end: ($) => { console.log("$type/?union/*UnionType/*TupleType/.state/*LiteralType end") },
        },
        "$type/?union/*UnionType/*TupleType": {
            begin: ($) => { console.log("$type/?union/*UnionType/*TupleType begin") },
            end: ($) => { console.log("$type/?union/*UnionType/*TupleType end") },
        },
        "$type/?union/*UnionType": {
            begin: ($) => { console.log("$type/?union/*UnionType begin") },
            end: ($) => { console.log("$type/?union/*UnionType end") },
        },
        "$typelessParameter/*Parameter": {
            begin: ($) => { console.log("$typelessParameter/*Parameter begin") },
            end: ($) => { console.log("$typelessParameter/*Parameter end") },
        },
        "/.imports/*ImportDeclaration/.clause/*ImportClause/?namespace/*NamespaceImport": {
            begin: ($) => { console.log("/.imports/*ImportDeclaration/.clause/*ImportClause/?namespace/*NamespaceImport begin") },
            end: ($) => { console.log("/.imports/*ImportDeclaration/.clause/*ImportClause/?namespace/*NamespaceImport end") },
        },
        "/.imports/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports/*ImportSpecifier": {
            begin: ($) => { console.log("/.imports/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports/*ImportSpecifier begin") },
            end: ($) => { console.log("/.imports/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports/*ImportSpecifier end") },
        },
        "/.imports/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports": {
            begin: ($) => { console.log("/.imports/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports begin") },
            end: ($) => { console.log("/.imports/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports end") },
        },
        "/.imports/*ImportDeclaration/.clause/*ImportClause": {
            begin: ($) => { console.log("/.imports/*ImportDeclaration/.clause/*ImportClause begin") },
            end: ($) => { console.log("/.imports/*ImportDeclaration/.clause/*ImportClause end") },
        },
        "/.imports/*ImportDeclaration/.file/*StringLiteral": ($) => { console.log("/.imports/*ImportDeclaration/.file/*StringLiteral") },
        "/.imports/*ImportDeclaration": {
            begin: ($) => { console.log("/.imports/*ImportDeclaration begin") },
            end: ($) => { console.log("/.imports/*ImportDeclaration end") },
        },
        "/.procedures/*FunctionDeclaration/.export/*ExportKeyword": ($) => { console.log("/.procedures/*FunctionDeclaration/.export/*ExportKeyword") },
        "/.procedures/*FunctionDeclaration/.typeParameters/*TypeParameter": {
            begin: ($) => { console.log("/.procedures/*FunctionDeclaration/.typeParameters/*TypeParameter begin") },
            end: ($) => { console.log("/.procedures/*FunctionDeclaration/.typeParameters/*TypeParameter end") },
        },
        "/.procedures/*FunctionDeclaration/.parameters/*Parameter/.type/?func/*FunctionType/.parameters/*Parameter": {
            begin: ($) => { console.log("/.procedures/*FunctionDeclaration/.parameters/*Parameter/.type/?func/*FunctionType/.parameters/*Parameter begin") },
            end: ($) => { console.log("/.procedures/*FunctionDeclaration/.parameters/*Parameter/.type/?func/*FunctionType/.parameters/*Parameter end") },
        },
        "/.procedures/*FunctionDeclaration/.parameters/*Parameter/.type/?func/*FunctionType": {
            begin: ($) => { console.log("/.procedures/*FunctionDeclaration/.parameters/*Parameter/.type/?func/*FunctionType begin") },
            end: ($) => { console.log("/.procedures/*FunctionDeclaration/.parameters/*Parameter/.type/?func/*FunctionType end") },
        },
        "/.procedures/*FunctionDeclaration/.parameters/*Parameter/.type/?typeReference/*TypeReference/.name/*QualifiedName/.context/*Identifier": ($) => { console.log("/.procedures/*FunctionDeclaration/.parameters/*Parameter/.type/?typeReference/*TypeReference/.name/*QualifiedName/.context/*Identifier") },
        "/.procedures/*FunctionDeclaration/.parameters/*Parameter/.type/?typeReference/*TypeReference/.name/*QualifiedName/.type/*Identifier": ($) => { console.log("/.procedures/*FunctionDeclaration/.parameters/*Parameter/.type/?typeReference/*TypeReference/.name/*QualifiedName/.type/*Identifier") },
        "/.procedures/*FunctionDeclaration/.parameters/*Parameter/.type/?typeReference/*TypeReference/.name/*QualifiedName": {
            begin: ($) => { console.log("/.procedures/*FunctionDeclaration/.parameters/*Parameter/.type/?typeReference/*TypeReference/.name/*QualifiedName begin") },
            end: ($) => { console.log("/.procedures/*FunctionDeclaration/.parameters/*Parameter/.type/?typeReference/*TypeReference/.name/*QualifiedName end") },
        },
        "/.procedures/*FunctionDeclaration/.parameters/*Parameter/.type/?typeReference/*TypeReference": {
            begin: ($) => { console.log("/.procedures/*FunctionDeclaration/.parameters/*Parameter/.type/?typeReference/*TypeReference begin") },
            end: ($) => { console.log("/.procedures/*FunctionDeclaration/.parameters/*Parameter/.type/?typeReference/*TypeReference end") },
        },
        "/.procedures/*FunctionDeclaration/.parameters/*Parameter": {
            begin: ($) => { console.log("/.procedures/*FunctionDeclaration/.parameters/*Parameter begin") },
            end: ($) => { console.log("/.procedures/*FunctionDeclaration/.parameters/*Parameter end") },
        },
        "/.procedures/*FunctionDeclaration/.returnType/*TypeReference/.referencedType/?qualifiedName/*QualifiedName": {
            begin: ($) => { console.log("/.procedures/*FunctionDeclaration/.returnType/*TypeReference/.referencedType/?qualifiedName/*QualifiedName begin") },
            end: ($) => { console.log("/.procedures/*FunctionDeclaration/.returnType/*TypeReference/.referencedType/?qualifiedName/*QualifiedName end") },
        },
        "/.procedures/*FunctionDeclaration/.returnType/*TypeReference": {
            begin: ($) => { console.log("/.procedures/*FunctionDeclaration/.returnType/*TypeReference begin") },
            end: ($) => { console.log("/.procedures/*FunctionDeclaration/.returnType/*TypeReference end") },
        },
        "/.procedures/*FunctionDeclaration/.block/*Block/.returnStatement/*ReturnStatement": {
            begin: ($) => { console.log("/.procedures/*FunctionDeclaration/.block/*Block/.returnStatement/*ReturnStatement begin") },
            end: ($) => { console.log("/.procedures/*FunctionDeclaration/.block/*Block/.returnStatement/*ReturnStatement end") },
        },
        "/.procedures/*FunctionDeclaration/.block/*Block": {
            begin: ($) => { console.log("/.procedures/*FunctionDeclaration/.block/*Block begin") },
            end: ($) => { console.log("/.procedures/*FunctionDeclaration/.block/*Block end") },
        },
        "/.procedures/*FunctionDeclaration": {
            begin: ($) => { console.log("/.procedures/*FunctionDeclaration begin") },
            end: ($) => { console.log("/.procedures/*FunctionDeclaration end") },
        },
        "/.endOfFile/*EndOfFileToken": ($) => { console.log("/.endOfFile/*EndOfFileToken") },
        "": {
            begin: ($) => { console.log(" begin") },
            end: ($) => { console.log(" end") },
        },
    }
}