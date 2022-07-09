import * as pr from "pareto-lib-core"
import * as api from "../../interface/types/ts_api"

export type IVisitor<Annotation> = {
    readonly "$identifier/*Identifier"?: ($: api.TNGidentifier$<Annotation>) => void
    readonly "$initialization/?identifier/*Identifier"?: ($: api.TNGinitialization_identifier$<Annotation>) => void
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
    readonly "$typelessParameter/*Parameter"?: {
        readonly "begin": ($: api.TNGtypelessParameter$<Annotation>) => void,
        readonly "end": ($: api.TNGtypelessParameter$<Annotation>) => void,
    }
    readonly "/.import/*ImportDeclaration/.clause/*ImportClause/?namespace/*NamespaceImport"?: {
        readonly "begin": ($: api.TNroot_import$_clause$_namespace$<Annotation>) => void,
        readonly "end": ($: api.TNroot_import$_clause$_namespace$<Annotation>) => void,
    }
    readonly "/.import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports/*ImportSpecifier"?: {
        readonly "begin": ($: api.TNroot_import$_clause$_named$$<Annotation>) => void,
        readonly "end": ($: api.TNroot_import$_clause$_named$$<Annotation>) => void,
    }
    readonly "/.import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports"?: {
        readonly "begin": ($: api.TNroot_import$_clause$_named$<Annotation>) => void,
        readonly "end": ($: api.TNroot_import$_clause$_named$<Annotation>) => void,
    }
    readonly "/.import/*ImportDeclaration/.clause/*ImportClause"?: {
        readonly "begin": ($: api.TNroot_import$_clause$<Annotation>) => void,
        readonly "end": ($: api.TNroot_import$_clause$<Annotation>) => void,
    }
    readonly "/.import/*ImportDeclaration/.file/*StringLiteral"?: ($: api.TNroot_import$_file$<Annotation>) => void
    readonly "/.import/*ImportDeclaration"?: {
        readonly "begin": ($: api.TNroot_import$<Annotation>) => void,
        readonly "end": ($: api.TNroot_import$<Annotation>) => void,
    }
    readonly "/.variables/*VariableStatement/.export/*ExportKeyword"?: ($: api.TNroot_variables$_export$<Annotation>) => void
    readonly "/.variables/*VariableStatement/.variableDeclarationList/*VariableDeclarationList/*VariableDeclaration/.name/*Identifier"?: ($: api.TNroot_variables$_variableDeclarationList$$_name$<Annotation>) => void
    readonly "/.variables/*VariableStatement/.variableDeclarationList/*VariableDeclarationList/*VariableDeclaration/.type/*TypeReference/.name/*QualifiedName/.context/*Identifier"?: ($: api.TNroot_variables$_variableDeclarationList$$_type$_name$_context$<Annotation>) => void
    readonly "/.variables/*VariableStatement/.variableDeclarationList/*VariableDeclarationList/*VariableDeclaration/.type/*TypeReference/.name/*QualifiedName/.type/*Identifier"?: ($: api.TNroot_variables$_variableDeclarationList$$_type$_name$_type$<Annotation>) => void
    readonly "/.variables/*VariableStatement/.variableDeclarationList/*VariableDeclarationList/*VariableDeclaration/.type/*TypeReference/.name/*QualifiedName"?: {
        readonly "begin": ($: api.TNroot_variables$_variableDeclarationList$$_type$_name$<Annotation>) => void,
        readonly "end": ($: api.TNroot_variables$_variableDeclarationList$$_type$_name$<Annotation>) => void,
    }
    readonly "/.variables/*VariableStatement/.variableDeclarationList/*VariableDeclarationList/*VariableDeclaration/.type/*TypeReference"?: {
        readonly "begin": ($: api.TNroot_variables$_variableDeclarationList$$_type$<Annotation>) => void,
        readonly "end": ($: api.TNroot_variables$_variableDeclarationList$$_type$<Annotation>) => void,
    }
    readonly "/.variables/*VariableStatement/.variableDeclarationList/*VariableDeclarationList/*VariableDeclaration"?: {
        readonly "begin": ($: api.TNroot_variables$_variableDeclarationList$$<Annotation>) => void,
        readonly "end": ($: api.TNroot_variables$_variableDeclarationList$$<Annotation>) => void,
    }
    readonly "/.variables/*VariableStatement/.variableDeclarationList/*VariableDeclarationList"?: {
        readonly "begin": ($: api.TNroot_variables$_variableDeclarationList$<Annotation>) => void,
        readonly "end": ($: api.TNroot_variables$_variableDeclarationList$<Annotation>) => void,
    }
    readonly "/.variables/*VariableStatement"?: {
        readonly "begin": ($: api.TNroot_variables$<Annotation>) => void,
        readonly "end": ($: api.TNroot_variables$<Annotation>) => void,
    }
    readonly "/.endOfFile/*EndOfFileToken"?: ($: api.TNroot_endOfFile$<Annotation>) => void
    readonly ""?: {
        readonly "begin": ($: api.TNroot<Annotation>) => void,
        readonly "end": ($: api.TNroot<Annotation>) => void,
    }
}