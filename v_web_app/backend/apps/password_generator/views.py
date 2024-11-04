from password_generator import password
from django.http import JsonResponse


def response_password(request):
    try:
        result = password()

        if isinstance(result, str) == False:
            print(f"Error in script: {result}")

        return JsonResponse({"output": result})
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)
