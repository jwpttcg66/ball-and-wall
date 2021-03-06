
define('app/episodes/pegasus/resources', 
[
    
], 
function() {
    
    return function() {
        return [
            // html resources
            {id: 'h-bg', src: FULLADDR + 'images/episodes/pegasus/game-bg.jpg'},
            {id: 'h-bottom-line', src: FULLADDR + 'images/episodes/pegasus/game-bottom-line.png'},
            // sounds
            {id: 's-block-hit', src: FULLADDR + 'sounds/episodes/pegasus/block-hit.ogg'},
            {id: 's-block-indestructible-hit', src: FULLADDR + 'sounds/episodes/pegasus/block-indestructible-hit.ogg'},
            {id: 's-coin-hit', src: FULLADDR + 'sounds/episodes/pegasus/coin-hit.ogg'},
            {id: 's-bonus-catch', src: FULLADDR + 'sounds/episodes/pegasus/bonus-catch.ogg'},
            {id: 's-paddle-hit', src: FULLADDR + 'sounds/episodes/pegasus/paddle-hit.ogg'},
            {id: 's-wall-hit', src: FULLADDR + 'sounds/episodes/pegasus/wall-hit.ogg'},
            {id: 's-win', src: FULLADDR + 'sounds/episodes/pegasus/win.ogg'},
            {id: 's-lost-ball', src: FULLADDR + 'sounds/episodes/pegasus/lost-ball.ogg'},
            {id: 's-gun', src: FULLADDR + 'sounds/episodes/pegasus/gun.ogg'},
            {id: 's-earthquake', src: FULLADDR + 'sounds/episodes/pegasus/earthquake.ogg'},
            {id: 's-music', src: FULLADDR + 'sounds/episodes/pegasus/music.ogg'},
            // canvas resources
            {id: 'c-canvas-bg-front', src: FULLADDR + 'images/episodes/pegasus/game-canvas-bg-front.png'},
            {id: 'c-canvas-bg-mid', src: FULLADDR + 'images/episodes/pegasus/game-canvas-bg-mid.png'},
            {id: 'c-canvas-bg-back', src: FULLADDR + 'images/episodes/pegasus/game-canvas-bg-back.png'},
            {id: 'c-facade-bg', src: FULLADDR + 'images/episodes/pegasus/game-facade-bg.png'},
            {id: 'c-ball-big', src: FULLADDR + 'images/episodes/pegasus/ball-big.png'},
            {id: 'c-ball-normal', src: FULLADDR + 'images/episodes/pegasus/ball-normal.png'},
            {id: 'c-ball-small', src: FULLADDR + 'images/episodes/pegasus/ball-small.png'},
            {id: 'c-ball-steel', src: FULLADDR + 'images/episodes/pegasus/ball-steel.png'},
            {id: 'c-paddle-left', src: FULLADDR + 'images/episodes/pegasus/paddle-left.png'},
            {id: 'c-paddle-center', src: FULLADDR + 'images/episodes/pegasus/paddle-center.png'},
            {id: 'c-paddle-right', src: FULLADDR + 'images/episodes/pegasus/paddle-right.png'},
            {id: 'c-paddle-barrel', src: FULLADDR + 'images/episodes/pegasus/paddle-barrel.png'},
            {id: 'c-paddle-bullet', src: FULLADDR + 'images/episodes/pegasus/paddle-bullet.png'},
            {id: 'c-btn-help', src: FULLADDR + 'images/episodes/pegasus/btn-help.png'},
            {id: 'c-btn-options', src: FULLADDR + 'images/episodes/pegasus/btn-options.png'},
            {id: 'c-btn-play', src: FULLADDR + 'images/episodes/pegasus/btn-play.png'},
            {id: 'c-btn-user', src: FULLADDR + 'images/episodes/pegasus/btn-user.png'},
            {id: 'c-cloud', src: FULLADDR + 'images/episodes/pegasus/cloud.png'},
            // dashboard
            {id: 'c-dashboard-bg', src: FULLADDR + 'images/episodes/pegasus/dashboard-bg.png'},
            {id: 'c-dashboard-speed-left', src: FULLADDR + 'images/episodes/pegasus/dashboard-speed-left.png'},
            {id: 'c-dashboard-speed', src: FULLADDR + 'images/episodes/pegasus/dashboard-speed.png'},
            {id: 'c-dashboard-speed-right', src: FULLADDR + 'images/episodes/pegasus/dashboard-speed-right.png'},
            {id: 'c-dashboard-speed-icon', src: FULLADDR + 'images/episodes/pegasus/dashboard-speed-icon.png'},
            // bonuses
            {id: 'c-bonus-3-balls', src: FULLADDR + 'images/episodes/pegasus/bonuses/3_balls/1.png'},
            {id: 'c-bonus-big-ball', src: FULLADDR + 'images/episodes/pegasus/bonuses/big_ball/1.png'},
            {id: 'c-bonus-die', src: FULLADDR + 'images/episodes/pegasus/bonuses/die/1.png'},
            {id: 'c-bonus-extra-life', src: FULLADDR + 'images/episodes/pegasus/bonuses/extra_life/1.png'},
            {id: 'c-bonus-glue-paddle', src: FULLADDR + 'images/episodes/pegasus/bonuses/glue_paddle/1.png'},
            {id: 'c-bonus-grow-paddle', src: FULLADDR + 'images/episodes/pegasus/bonuses/grow_paddle/1.png'},
            {id: 'c-bonus-score', src: FULLADDR + 'images/episodes/pegasus/bonuses/score/1.png'},
            {id: 'c-bonus-shrink-paddle', src: FULLADDR + 'images/episodes/pegasus/bonuses/shrink_paddle/1.png'},
            {id: 'c-bonus-small-ball', src: FULLADDR + 'images/episodes/pegasus/bonuses/small_ball/1.png'},
            {id: 'c-bonus-gun', src: FULLADDR + 'images/episodes/pegasus/bonuses/gun/1.png'},
            {id: 'c-bonus-earthquake', src: FULLADDR + 'images/episodes/pegasus/bonuses/earthquake/1.png'},
            {id: 'c-bonus-turbulent-ball', src: FULLADDR + 'images/episodes/pegasus/bonuses/turbulent-ball/1.png'},
            {id: 'c-bonus-clouds', src: FULLADDR + 'images/episodes/pegasus/bonuses/clouds/1.png'},
            {id: 'c-bonus-cpu-paddle', src: FULLADDR + 'images/episodes/pegasus/bonuses/cpu-paddle/1.png'},
            // blocks
            {id: 'c-block-empty', src: FULLADDR + 'images/episodes/pegasus/blocks/empty.png'},
            {id: 'c-block-grass-both-side', src: FULLADDR + 'images/episodes/pegasus/blocks/grass-both-side/1.png'},
            {id: 'c-block-grass-corner-top-left', src: FULLADDR + 'images/episodes/pegasus/blocks/grass-corner-top-left/1.png'},
            {id: 'c-block-grass-corner-top-right', src: FULLADDR + 'images/episodes/pegasus/blocks/grass-corner-top-right/1.png'},
            {id: 'c-block-grass-left', src: FULLADDR + 'images/episodes/pegasus/blocks/grass-left/1.png'},
            {id: 'c-block-grass-left-right', src: FULLADDR + 'images/episodes/pegasus/blocks/grass-left-right/1.png'},
            {id: 'c-block-grass-left-side', src: FULLADDR + 'images/episodes/pegasus/blocks/grass-left-side/1.png'},
            {id: 'c-block-grass-left-small', src: FULLADDR + 'images/episodes/pegasus/blocks/grass-left-small/1.png'},
            {id: 'c-block-grass-right', src: FULLADDR + 'images/episodes/pegasus/blocks/grass-right/1.png'},
            {id: 'c-block-grass-right-side', src: FULLADDR + 'images/episodes/pegasus/blocks/grass-right-side/1.png'},
            {id: 'c-block-grass-right-small', src: FULLADDR + 'images/episodes/pegasus/blocks/grass-right-small/1.png'},
            {id: 'c-block-grass-top', src: FULLADDR + 'images/episodes/pegasus/blocks/grass-top/1.png'},
            {id: 'c-block-ground', src: FULLADDR + 'images/episodes/pegasus/blocks/ground/1.png'},
            {id: 'c-block-box', src: FULLADDR + 'images/episodes/pegasus/blocks/box/1.png'},
            {id: 'c-block-coin', src: FULLADDR + 'images/episodes/pegasus/blocks/coin/1.png'},
            {id: 'c-block-coin-anim', src: FULLADDR + 'images/episodes/pegasus/blocks/coin/anim.png'},
            {id: 'c-block-black-hole/spinning', src: FULLADDR + 'images/episodes/pegasus/blocks/black-hole/1.png'},
            {id: 'c-block-black-hole/unstable', src: FULLADDR + 'images/episodes/pegasus/blocks/black-hole/1.png'},
            {id: 'c-block-black-hole/spinning-preview', src: FULLADDR + 'images/episodes/pegasus/blocks/black-hole/spinning.png'},
            {id: 'c-block-black-hole/unstable-preview', src: FULLADDR + 'images/episodes/pegasus/blocks/black-hole/unstable.png'},
            {id: 'c-block-trampoline-top', src: FULLADDR + 'images/episodes/pegasus/blocks/trampoline/top.png'},
            {id: 'c-block-trampoline-bottom', src: FULLADDR + 'images/episodes/pegasus/blocks/trampoline/bottom.png'},
            {id: 'c-block-trampoline-spring', src: FULLADDR + 'images/episodes/pegasus/blocks/trampoline/spring.png'},
            {id: 'c-block-trampoline-preview', src: FULLADDR + 'images/episodes/pegasus/blocks/trampoline/trampoline.png'}
        ];
    };
});