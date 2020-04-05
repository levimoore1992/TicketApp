from rest_framework import response
from rest_framework.views import APIView
import json
from django.http import JsonResponse
import stripe
from .serializers import PaymentSerializer

# Create your views here.

class StripeView(APIView):

    def post(self, request):
        serializer = PaymentSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        data = serializer.data
        print(data)
        stripe.api_key = 'sk_test_clyABYueO769i923TFtYhuQJ00JaoyM53N'
        session = stripe.checkout.Session.create(
            payment_method_types=['card'],
            line_items=[{
                'name': data['festival'],
                'description': data['festival'],
                'images': ['https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'],
                'amount': data['price']*100,
                'currency': 'usd',
                'quantity': 1,
            }],
            success_url='https://example.com/success?session_id={CHECKOUT_SESSION_ID}',
            cancel_url='http://localhost:4200',
            )
        return JsonResponse(session)


