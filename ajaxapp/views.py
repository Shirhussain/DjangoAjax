from django.shortcuts import render
from django.views.generic import View
from time import time
from django.http import JsonResponse

# as you know that all parameters of GET request are stored in the rquest object 
# to be exactly in it's get dictionary and the rquest object accept the required arguemnt 
# so let's get the text of the button 
# in java scripts file i used (button_text) text key so i use here

class AjaxHandlerView(View):
    def get(self, request):
        text = request.GET.get('button_text')
        if request.is_ajax():
            t=time()
            return JsonResponse({'seconds':t}, status=200)
        return render(request, "index.html", {})

    # sometime maybe id dosn't work in post methdo and you got 403 it means forbedn
    # so you have to use ( CSrF_Token ) in your file(index) that is use  
    def post(self, request):
        # when is use get('text') it means it take form data i defined in ajax in main.js
        card_text = request.POST.get('text')
        result = f"I've got : {card_text}"
        return JsonResponse({'data': result}, status=200)
        

