from pathlib import Path
from typing import List

class Settings:
    APP_NAME: str = "Cement Clinker Classifier API"
    APP_VERSION: str = "1.0.0"
    DEBUG: bool = True
    HOST: str = "0.0.0.0"
    PORT: int = 8000
    
    ALLOWED_ORIGINS: List[str] = [
        "http://localhost:3000",
        "http://localhost:3001"
    ]
    
    BASE_DIR: Path = Path(__file__).resolve().parent.parent
    IMAGE_SIZE: int = 224
    CLASS_NAMES: List[str] = ["C2S", "C3A", "C3S", "C4AF"]
    
    MAX_FILE_SIZE: int = 10 * 1024 * 1024
    ALLOWED_EXTENSIONS: List[str] = ["jpg", "jpeg", "png", "bmp", "tif", "tiff"]
    LOG_LEVEL: str = "INFO"

settings = Settings()