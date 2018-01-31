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
export default class Cursor extends cc.Component {

    onLoad () {

        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDebugDraw = true;
    }

    start () {

    }

    update (dt) {}

    onCollisionEnter(other, self) {
        cc.log("onCollisionEnter other.name" + other.name + " tag " + other.node.tag);
        cc.log("self.name" + self.name + " tag " + self.node.tag);

        if (other.node.tag == self.node.tag) {
            cc.log("HieuLog Score++");
        }
        GameController.GameState.isCollisionCursor = true;
    }
    
    onCollisionExit(other, self) {
        cc.log("onCollisionExit other.name" + other.name + " tag " + other.node.tag);
        GameController.GameState.isCollisionCursor = false;

        other.node.destroy();
    }
}
