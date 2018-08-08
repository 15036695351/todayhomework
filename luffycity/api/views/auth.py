from rest_framework.views import APIView
from rest_framework.viewsets import ViewSetMixin

from rest_framework.response import Response
from api.utils.respon import BaseResponse


class AuthView(ViewSetMixin, APIView):

    def login(self,request,*args,**kwargs):
        ret = BaseResponse()
        # print('用户发来POST请求了',request)
        print('用户发来POST请求了', request.body)  # 如果是在获取request.POST之后获取request.body，这样是不让获取的，因此，bbody只能在POST之前获取
        print('用户发来POST请求了',request.POST)    # 用json文件发来的数据POST不能解析，因此不再POST里面

        ret.code = 11111
        return Response(ret.dict)