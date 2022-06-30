import * as pr from "pareto-lang-lib"
import * as f from "../../interface/interfaces/visitor"

export function createDefaultVisistor(): f.IVisitor<string> {
    return {
        "$identifier/*Identifier": ($) => { console.log("$identifier/*Identifier") },
        "$initialization/?identifier/*Identifier": ($) => { console.log("$initialization/?identifier/*Identifier") },
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
        "$typelessParameter/*Parameter": {
            begin: ($) => { console.log("$typelessParameter/*Parameter begin") },
            end: ($) => { console.log("$typelessParameter/*Parameter end") },
        },
        "/.import/*ImportDeclaration/.clause/*ImportClause/?namespace/*NamespaceImport": {
            begin: ($) => { console.log("/.import/*ImportDeclaration/.clause/*ImportClause/?namespace/*NamespaceImport begin") },
            end: ($) => { console.log("/.import/*ImportDeclaration/.clause/*ImportClause/?namespace/*NamespaceImport end") },
        },
        "/.import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports/*ImportSpecifier": {
            begin: ($) => { console.log("/.import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports/*ImportSpecifier begin") },
            end: ($) => { console.log("/.import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports/*ImportSpecifier end") },
        },
        "/.import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports": {
            begin: ($) => { console.log("/.import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports begin") },
            end: ($) => { console.log("/.import/*ImportDeclaration/.clause/*ImportClause/?named/*NamedImports end") },
        },
        "/.import/*ImportDeclaration/.clause/*ImportClause": {
            begin: ($) => { console.log("/.import/*ImportDeclaration/.clause/*ImportClause begin") },
            end: ($) => { console.log("/.import/*ImportDeclaration/.clause/*ImportClause end") },
        },
        "/.import/*ImportDeclaration/.file/*StringLiteral": ($) => { console.log("/.import/*ImportDeclaration/.file/*StringLiteral") },
        "/.import/*ImportDeclaration": {
            begin: ($) => { console.log("/.import/*ImportDeclaration begin") },
            end: ($) => { console.log("/.import/*ImportDeclaration end") },
        },
        "/.variables/*VariableStatement/.export/*ExportKeyword": ($) => { console.log("/.variables/*VariableStatement/.export/*ExportKeyword") },
        "/.variables/*VariableStatement/.variableDeclarationList/*VariableDeclarationList/*VariableDeclaration/.name/*Identifier": ($) => { console.log("/.variables/*VariableStatement/.variableDeclarationList/*VariableDeclarationList/*VariableDeclaration/.name/*Identifier") },
        "/.variables/*VariableStatement/.variableDeclarationList/*VariableDeclarationList/*VariableDeclaration/.type/*TypeReference/.name/*QualifiedName/.context/*Identifier": ($) => { console.log("/.variables/*VariableStatement/.variableDeclarationList/*VariableDeclarationList/*VariableDeclaration/.type/*TypeReference/.name/*QualifiedName/.context/*Identifier") },
        "/.variables/*VariableStatement/.variableDeclarationList/*VariableDeclarationList/*VariableDeclaration/.type/*TypeReference/.name/*QualifiedName/.type/*Identifier": ($) => { console.log("/.variables/*VariableStatement/.variableDeclarationList/*VariableDeclarationList/*VariableDeclaration/.type/*TypeReference/.name/*QualifiedName/.type/*Identifier") },
        "/.variables/*VariableStatement/.variableDeclarationList/*VariableDeclarationList/*VariableDeclaration/.type/*TypeReference/.name/*QualifiedName": {
            begin: ($) => { console.log("/.variables/*VariableStatement/.variableDeclarationList/*VariableDeclarationList/*VariableDeclaration/.type/*TypeReference/.name/*QualifiedName begin") },
            end: ($) => { console.log("/.variables/*VariableStatement/.variableDeclarationList/*VariableDeclarationList/*VariableDeclaration/.type/*TypeReference/.name/*QualifiedName end") },
        },
        "/.variables/*VariableStatement/.variableDeclarationList/*VariableDeclarationList/*VariableDeclaration/.type/*TypeReference": {
            begin: ($) => { console.log("/.variables/*VariableStatement/.variableDeclarationList/*VariableDeclarationList/*VariableDeclaration/.type/*TypeReference begin") },
            end: ($) => { console.log("/.variables/*VariableStatement/.variableDeclarationList/*VariableDeclarationList/*VariableDeclaration/.type/*TypeReference end") },
        },
        "/.variables/*VariableStatement/.variableDeclarationList/*VariableDeclarationList/*VariableDeclaration": {
            begin: ($) => { console.log("/.variables/*VariableStatement/.variableDeclarationList/*VariableDeclarationList/*VariableDeclaration begin") },
            end: ($) => { console.log("/.variables/*VariableStatement/.variableDeclarationList/*VariableDeclarationList/*VariableDeclaration end") },
        },
        "/.variables/*VariableStatement/.variableDeclarationList/*VariableDeclarationList": {
            begin: ($) => { console.log("/.variables/*VariableStatement/.variableDeclarationList/*VariableDeclarationList begin") },
            end: ($) => { console.log("/.variables/*VariableStatement/.variableDeclarationList/*VariableDeclarationList end") },
        },
        "/.variables/*VariableStatement": {
            begin: ($) => { console.log("/.variables/*VariableStatement begin") },
            end: ($) => { console.log("/.variables/*VariableStatement end") },
        },
        "/.endOfFile/*EndOfFileToken": ($) => { console.log("/.endOfFile/*EndOfFileToken") },
        "": {
            begin: ($) => { console.log(" begin") },
            end: ($) => { console.log(" end") },
        },
    }
}