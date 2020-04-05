from rest_framework import response
from rest_framework.views import APIView
import json
from django.http import JsonResponse
import stripe


# Create your views here.

class StripeView(APIView):

    def post(self, request):
        # data = json.loads(request.data)
        stripe.api_key = 'sk_test_clyABYueO769i923TFtYhuQJ00JaoyM53N'
        session = stripe.checkout.Session.create(
            payment_method_types=['card'],
            line_items=[{
                'name': 'T-shirt',
                'description': 'Comfortable cotton t-shirt',
                'images': ['https://example.com/t-shirt.png'],
                'amount': 500,
                'currency': 'usd',
                'quantity': 1,
            }],
            success_url='https://example.com/success?session_id={CHECKOUT_SESSION_ID}',
            cancel_url='https://example.com/cancel',
            )
        return JsonResponse(session)


