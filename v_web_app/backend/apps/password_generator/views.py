import subprocess
from django.http import JsonResponse


def response_password(request):
    try:
        result = subprocess.run(
            ['python3', '/home/edimez14/Documentos/proyectos/programacion/cross_platform_app/password_generator/v_console/password_generator.py'], 
            capture_output=True, 
            text=True
        )
        output = result.stdout.strip()

        if result.stderr:
            print(f"Error in script: {result.stderr}")

        return JsonResponse({"output": output})
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)
