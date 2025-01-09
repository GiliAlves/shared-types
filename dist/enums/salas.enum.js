"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesEnum = exports.ResidenteEnum = exports.GeneroEnum = exports.StatusSalaEnum = exports.StatusIgrejaEnum = exports.SalaNomeEnum = void 0;
var SalaNomeEnum;
(function (SalaNomeEnum) {
    SalaNomeEnum["NOE"] = "no\u00E9";
    SalaNomeEnum["RAIOS_DE_LUZ"] = "raios de luz";
    SalaNomeEnum["DAVI"] = "davi";
    SalaNomeEnum["EZEQUIEL"] = "ezequiel";
    SalaNomeEnum["MOISES"] = "mois\u00E9s";
    SalaNomeEnum["JUDA"] = "jud\u00E1";
})(SalaNomeEnum || (exports.SalaNomeEnum = SalaNomeEnum = {}));
var StatusIgrejaEnum;
(function (StatusIgrejaEnum) {
    StatusIgrejaEnum["COMUNGANTES"] = "comungantes";
    StatusIgrejaEnum["NAO_COMUNGANTES"] = "n\u00E3o comungantes";
    StatusIgrejaEnum["ROL_SEPARADO"] = "rol separado";
    StatusIgrejaEnum["VISITANTES"] = "visitantes";
    StatusIgrejaEnum["EXCLUIDOS"] = "exclu\u00EDdos";
})(StatusIgrejaEnum || (exports.StatusIgrejaEnum = StatusIgrejaEnum = {}));
var StatusSalaEnum;
(function (StatusSalaEnum) {
    StatusSalaEnum["ALUNO"] = "aluno";
    StatusSalaEnum["PROFESSOR"] = "professor";
    StatusSalaEnum["VISITANTE"] = "visitante";
    StatusSalaEnum["NDA"] = "nda";
})(StatusSalaEnum || (exports.StatusSalaEnum = StatusSalaEnum = {}));
var GeneroEnum;
(function (GeneroEnum) {
    GeneroEnum["MASCULINO"] = "masculino";
    GeneroEnum["FEMININO"] = "feminino";
})(GeneroEnum || (exports.GeneroEnum = GeneroEnum = {}));
var ResidenteEnum;
(function (ResidenteEnum) {
    ResidenteEnum["SEDE"] = "sede";
    ResidenteEnum["ZAIRA"] = "zaira";
})(ResidenteEnum || (exports.ResidenteEnum = ResidenteEnum = {}));
var RolesEnum;
(function (RolesEnum) {
    RolesEnum["ADMIN"] = "admin";
    RolesEnum["PROFESSOR"] = "professor";
})(RolesEnum || (exports.RolesEnum = RolesEnum = {}));
