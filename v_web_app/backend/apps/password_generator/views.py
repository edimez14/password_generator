from password_generator import password
from django.http import JsonResponse


def response_password(request):
    try:
        result = password()
        output = result.stdout.strip()

        if result.stderr:
            print(f"Error in script: {result.stderr}")

        return JsonResponse({"output": output})
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)
