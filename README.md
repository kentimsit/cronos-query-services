# Cronos Query Services

## Overview

Examples of services that can be used to query Cronos chain

Available services:

- Cronos explorer (https://cronos.org/explorer)
- Cronoscan (https://cronoscan.com)
- Bitquery (https://bitquery.io/)
- Subquery (https://subquery.network/) [tutorial not available yet]
- Footprint analytics (https://www.footprint.network/)
- Covalent (https://www.covalenthq.com/)
- Unmarshal (https://unmarshal.io/)
- Moralis (https://moralis.io/)
_ 

For each service a Jupyter notebook, Markdown overview and/or dedicated folder is provided.

## Installation for Jypyter notebooks

Create a virtual environment using Python 3.10+, define it as default for this directory, and activate it. For example:

```shell
# Create virtual environment with pyenv
pyenv virtualenv 3.10.9 venv_3_10_9

# Define it as default for this directory
pyenv local venv_3_10_9

# Activate it in the terminal
pyenv activate venv_3_10_9
```

Install dependencies:

```shell
pip3 install requests python-dotenv jupyter pandas markdown

```

When executing the notebooks, please make sure that you have selected the local pyenv interpreter.

## Installation for Javascript

The folders use Node.js vewrion 16+. Install node using nvm.

