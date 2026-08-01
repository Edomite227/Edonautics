{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {

  packages = [ pkgs.packwiz ];

  shellHook = ''
    echo "welcome to edonautics devshell, population: 1"
  '';
}
