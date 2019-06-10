import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IngenieurService {

  getIngenieure() {
    return [
      {id: 1, name: 'Karen Enders'},
      {id: 2, name: 'Lisa Berger'},
      {id: 3, name: 'Scott Manley'},
      {id: 4, name: 'Jebediah Kerman'},
      {id: 5, name: 'Gene Kerman'}
    ];
  }

  getAccessLevels() {
    return [
      {id: 1, name: 'Level 1 - Allgemeiner Zugriff | 一般アクセス'},
      {id: 2, name: 'Level 2 - Modul Zugriff | モジュールアクセス'},
      {id: 3, name: 'Level 3 - Modulübersicht Zugriff | モジュール概要アクセス'},
      {id: 4, name: 'Level 4 - Vollständiger Überblick | 全概要アクセス'},
      {id: 5, name: 'Level 4a - Vertraulichkeits Zugriff | 機密アクセス'},
      {id: 6, name: 'Level 5 - Voller Zugriff | 全権アクセス'},
      {id: 7, name: 'Level 6 - Administrator Zugriff | 管理アクセス'},
      {id: 8, name: 'Level 7 - Voller Administrator Zugriff | フル管理アクセス'}
    ];
  }

  getExpertises() {
    return [
      {id: 1, name: 'Grundlagentechnik | 基礎工学'},
      {id: 2, name: 'Physik | 物理'},
      {id: 3, name: 'Astronomie | 天文学'},
      {id: 4, name: 'Raketenwissenschaft | ロケット科学'},
      {id: 5, name: 'Mathematik | 数学'},
      {id: 6, name: 'Biologie | 生物学'},
      {id: 7, name: 'Medizin | 医学'},
      {id: 8, name: 'Chemie | 化学'},
      {id: 9, name: 'Kernphysik | 核物理学'},
      {id: 10, name: 'Teilchenphysik | 素粒子物理学'},
      {id: 11, name: 'Neurologie | 神経学'},
      {id: 12, name: 'Gastroenterologie | 消化器科'},
    ];
  }

}
