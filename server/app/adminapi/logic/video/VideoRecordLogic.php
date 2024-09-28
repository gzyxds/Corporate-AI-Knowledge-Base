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

namespace app\adminapi\logic\video;

use app\common\enum\VideoEnum;
use app\common\enum\YesNoEnum;
use app\common\logic\BaseLogic;
use app\common\model\video\VideoRecord;
use app\common\model\video\VideoStyle;

/**
 * 视频记录类
 */
class VideoRecordLogic extends BaseLogic
{
    /**
     * @notes 删除
     * @param int|array $params
     * @return bool
     * @author mjf
     * @date 2024/5/27 12:13
     */
    public static function del(int|array $params): bool
    {
        return VideoRecord::destroy($params['id'] ?? 0);
    }

    /**
     * @notes 选项
     * @return array
     * @throws \think\db\exception\DataNotFoundException
     * @throws \think\db\exception\DbException
     * @throws \think\db\exception\ModelNotFoundException
     * @author mjf
     * @date 2024/5/30 16:35
     */
    public static function options() : array
    {
        $styleModel = new VideoStyle();
        $style = $styleModel->field('id, name')
            ->where('status', YesNoEnum::YES)
            ->order('sort desc id desc')
            ->select()
            ->toArray();

        $status = VideoEnum::getStatusDesc(true);
        $type = VideoEnum::getTypeDesc(true);

        return [
            'style' => $style,
            'status' => $status,
            'type' => $type,
            'channel' => VideoEnum::getChannel()
        ];
    }

}