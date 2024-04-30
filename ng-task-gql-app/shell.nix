with import <nixpkgs> {};
let
  my-python-packages = python-packages: [
    python-packages.pip
    python-packages.setuptools
  ];
  my-python = python38.withPackages my-python-packages;
in
  pkgs.mkShell {
    buildInputs = [
      bashInteractive
      my-python
      nodePackages.npm
      nodejs
    ];
    shellHook = ''
      export PIP_PREFIX="$(pwd)/_build/pip_packages"
      export PYTHONPATH="$(pwd)/_build/pip_packages/lib/python3.8/site-packages:$PYTHONPATH" 
      unset SOURCE_DATE_EPOCH
      export NPM_PREFIX="$(pwd)/_build/node_modules"
      export PATH=$PATH:$NPM_PREFIX/.bin
      export PATH=$PATH:$PIP_PREFIX/bin
      echo "Welcome! Run ./install_deps for dependencies not present in shell environment"
    '';
  }
