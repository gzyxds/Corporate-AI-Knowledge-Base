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

namespace app\adminapi\controller\channel;

use app\adminapi\controller\BaseAdminController;
use app\adminapi\logic\channel\OpenSettingLogic;
use app\adminapi\validate\channel\OpenSettingValidate;
use think\response\Json;

/**
 * 微信开放平台
 */
class OpenSettingController extends BaseAdminController
{

    /**
     * @notes 获取微信开放平台设置
     * @return Json
     * @author 段誉
     * @date 2022/3/29 11:03
     */
    public function getConfig(): Json
    {
        $result = OpenSettingLogic::getConfig();
        return $this->data($result);
    }


    /**
     * @notes 微信开放平台设置
     * @return Json
     * @author 段誉
     * @date 2022/3/29 11:03
     */
    public function setConfig(): Json
    {
        $params = (new OpenSettingValidate())->post()->goCheck();
        OpenSettingLogic::setConfig($params);
        return $this->success('操作成功', [], 1, 1);
    }
}