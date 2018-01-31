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

@ccclass
export default class GameController extends cc.Component {

    @property(cc.Canvas) canvas: cc.Canvas = null;
    @property(cc.Label) lblScore: cc.Label = null;
    public static GameState = 
    {
        play : false, 
        isCollisionCursor : false, 
        score : 0
    }
    onLoad () {}

    start () {
        this.canvas.node.on(cc.Node.EventType.TOUCH_START, this._onTouchStart.bind(this));
        this.canvas.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove.bind(this));
        this.canvas.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnd.bind(this));

    }
    _onTouchStart(event) {
        cc.log("HieuLog: TAP SCREEN");
        
        GameController.GameState.play = true;
        if(GameController.GameState.isCollisionCursor) {
            GameController.GameState.score += 1;
            this.lblScore.string = GameController.GameState.score.toString();
        }
        else {
            
        }
    }
   
    _onTouchMove(event) {
       
    }
    _onTouchEnd(event) {
        GameController.GameState.isCollisionCursor = false;
    }

    update (dt) {}
}
