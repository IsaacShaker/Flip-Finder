# Getting Started

## 1.) Create a Python Virtual Environment

### [FreeCodeCamp Setup Tutorial](https://www.freecodecamp.org/news/how-to-setup-virtual-environments-in-python/)

### <ins>CREATION</ins>

```
pip install venv
```

```
python -m venv env
```

### <ins>TO ACTIVATE:</ins>

#### CMD:

```
env\Scripts\activate.bat
```

#### POWERSHELL:

```
env\Scripts\Activate.ps1
```

#### MAC:

```
source env/bin/activate
```

### <ins>TO DEACTIVATE:</ins>

#### CMD:

```
env\Scripts\deactivate.bat
```

#### POWERSHELL:

```
deactivate
```

#### MAC:

```

```

### THINGS TO NOTE:

- requirements.txt keep track of all the libraries / dependencies downloaded and their versions

## 2.) Install dependencies

```
pip install -r requirements.txt
```

If you download additional dependencies, use this command to update requirements.txt

```
pip freeze > requirements.txt
```

Copyright 2024 Nico Lorenzi, Isaac Shaker
