{ pkgs, ... }:

{
  apple.sdk = null;

  languages.typescript.enable = true;

  packages = with pkgs; [
    nodejs_24
    pnpm
  ];
}
