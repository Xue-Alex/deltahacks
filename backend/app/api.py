from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

user_storage = {}

@app.get("/", tags=["root"])
async def read_root() -> dict:
    return {"message": "Welcome to your todo list."}


@app.put("/auth", tags=["authentication"])
async def update_todo(id: string, password: string) -> int:
    """return 2 means welcome back
        return 1 means new user made
        return 0 means user exists, password fails
     """
    if id in user_storage:
        if hash(password) == user_storage[id]:
            return 2
        return 0
    user_storage[id] = hash(password)
    return 1
