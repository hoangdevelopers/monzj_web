import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import { BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class RecipeService {
    private apiUrl = "http://monzj-minhlv.rhcloud.com/"
    
    constructor(private http: Http) {
    }
    GetList(): Observable<any[]> {
        let recipes = []
        return this.http.get(`${this.apiUrl}Food?limit=10`)
            .map((res: Response) => res.json())
    }
    GetRecipeForWeek(): Observable<any[]> {
        return this.http.get(`${this.apiUrl}Food?limit=7`)
            .map((res: Response) => res.json())
    }
    GetMenu() {
        return MENU;
    }
}
var MENU = [{
    name: 'Nguyên liệu',
    thumbnail: "/assets/img/thumbnail_nguyenlieu.jpg",
    background: "yellow-color",
    submenus: [
        {
            name: "Thịt",
            elements: [{
                name: "Thịt heo",
                slug: ""
            }, {
                name: "Thịt gà",
                slug: ""
            }, {
                name: "Thịt bò",
                slug: ""
            }, {
                name: "Khác",
                slug: ""
            }]
        }, {
            name: "Hải sản",
            elements: [{
                name: "Cá",
                slug: ""
            }, {
                name: "Tôm",
                slug: ""
            }, {
                name: "Mực/Bạch tuộc",
                slug: ""
            }, {
                name: "Khác",
                slug: ""
            }]
        }, {
            name: "Rau củ quả",
            elements: [{
                name: "Nấm",
                slug: ""
            }, {
                name: "Cà chua",
                slug: ""
            }, {
                name: "Cà rốt",
                slug: ""
            }, {
                name: "Khác",
                slug: ""
            }]
        }, {
            name: "Khác",
            elements: [{
                name: "Trứng",
                slug: ""
            }, {
                name: "Đậu hũ",
                slug: ""
            }, {
                name: "Bành mỳ",
                slug: ""
            }, {
                name: "Khác",
                slug: ""
            }]
        }
    ]
}, {
    name: 'Cách nấu',
    thumbnail: "/assets/img/thumbnail_cachnau.jpg",
    background: "pink-color",
    submenus: [
        {
            name: "",
            elements: [{
                name: "Kho",
                slug: ""
            }, {
                name: "Om/Rim",
                slug: ""
            }, {
                name: "Canh/Súp",
                slug: ""
            }]
        }, {
            name: "",
            elements: [{
                name: "Món Xào",
                slug: ""
            }, {
                name: "Lẩu",
                slug: ""
            }, {
                name: "Hầm",
                slug: ""
            }]
        }, {
            name: "",
            elements: [{
                name: "Gỏi/Trộn",
                slug: ""
            }, {
                name: "Gỏi/Trộn",
                slug: ""
            }, {
                name: "Chiên",
                slug: ""
            }]
        }, {
            name: "",
            elements: [{
                name: "Nướng",
                slug: ""
            }, {
                name: "Quay/Rôti",
                slug: ""
            }, {
                name: "Khác",
                slug: ""
            }]
        }
    ]
}, {
    name: 'Dịp nấu',
    thumbnail: "/assets/img/thumbnail_dipnau.jpg",
    background: "green-color",
    submenus: [
        {
            name: "Ngày",
            elements: [{
                name: "Thực đơn Hàng ngày",
                slug: ""
            }, {
                name: "Cuối tuần",
                slug: ""
            }]
        }, {
            name: "LỄ TIỆC",
            elements: [{
                name: "Sinh nhật",
                slug: ""
            }, {
                name: "Giáng sinh",
                slug: ""
            }, {
                name: "Khác",
                slug: ""
            }]
        }, {
            name: "VÙNG MIỀN",
            elements: [{
                name: "Bắc",
                slug: ""
            }, {
                name: "Trung",
                slug: ""
            }, {
                name: "Nam",
                slug: ""
            }]
        }, {
            name: "Khác",
            elements: [{
                name: "Món chay",
                slug: ""
            }, {
                name: "Tết",
                slug: ""
            }, {
                name: "Khác",
                slug: ""
            }]
        }
    ]
}]