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
export default class UIManager extends cc.Component {

    @property(cc.Node) background: cc.Node = null;
    @property(cc.Node) btnPlay: cc.Node = null;
    @property(cc.Node) btnRetry: cc.Node = null;
    @property(cc.Label) lblTapTo: cc.Label = null;

    public onClickPlay() {
        cc.log("PLAY ...");
        this.btnPlay.active = false;
        this.lblTapTo.node.active = false;
        
        GameController.GameState.isPlayed = true;
    }

    public onClickRetry() {
        cc.log("RETRY ...");
        this.btnRetry.active = false;
    }
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.log("onLoad ...");
        this.btnRetry.active = false;
        this.background.active = false;
    }

    start () {

    }

    // update (dt) {}
}
