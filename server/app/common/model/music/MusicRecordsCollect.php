<?php
// +----------------------------------------------------------------------
// | likeadmin快速开发前后端分离管理后台（PHP版）
// +----------------------------------------------------------------------
// | 欢迎阅读学习系统程序代码，建议反馈是我们前进的动力
// | 开源版本可自由商用，可去除界面版权logo
// | gitee下载：https://gitee.com/likeshop_gitee/likeadmin
// | github下载：https://github.com/likeshop-github/likeadmin
// | 访问官网：https://www.likeadmin.cn
// | likeadmin团队 版权所有 拥有最终解释权
// +----------------------------------------------------------------------
// | author: likeadminTeam
// +----------------------------------------------------------------------

namespace app\common\model\music;

use app\common\model\BaseModel;

/**
 * 音乐收藏
 * Class DrawRecordsCollect
 * @package app\common\model\draw
 */
class MusicRecordsCollect extends BaseModel
{

    /**
     * @notes 绘画记录
     * @return \think\model\relation\HasOne
     * @author 段誉
     * @date 2023/6/27 11:49
     */
    public function drawRecords()
    {
        return $this->hasOne(MusicRecord::class,'id','records_id')
            ->field('id,image_url');
    }
    
}