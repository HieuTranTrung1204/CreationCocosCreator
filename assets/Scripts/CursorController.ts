// Learn TypeScript:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/typescript/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html

const {ccclass, property} = cc._decorator;

import GameController from './GameController';

@ccclass
export default class CursorController extends cc.Component {

    _isRotate: boolean;

    @property(cc.Integer) speed : number = 0;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // init logic
        if (cc.director.setClearColor) {
            cc.director.setClearColor(cc.Color.WHITE);
        }
     
        this._isRotate = true;
    }

    start () {

    }

    update (dt) {
        if(GameController.GameState.isDie) {
            return;
        }

        if (this._isRotate == true) {
            var rotate = this.node.rotation + dt * this.speed;
            this.node.rotation = rotate;
        }
    }
}
