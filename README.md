# Getting Started

## 1.) Create a Python Virtual Environment

### [FreeCodeCamp Setup Tutorial](https://www.freecodecamp.org/news/how-to-setup-virtual-environments-in-python/)

### <ins>CREATION</ins>

```
pip install venv
```

```
python -m venv flip-finder
```

### <ins>TO ACTIVATE:</ins>

#### CMD:

```
flip-finder\Scripts\activate.bat
```

#### POWERSHELL:

```
flip-finder\Scripts\Activate.ps1
```

#### MAC:

```
source flip-finder/bin/activate
```

### <ins>TO DEACTIVATE:</ins>

#### CMD:

```
flip-finder\Scripts\deactivate.bat
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
