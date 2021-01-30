red=`tput setaf 1`
green=`tput setaf 2`
reset=`tput sgr0`
component=$1

printf "creating a skeleton for $component... "

cd ../components
mkdir "${component}"
cd "${component}"
touch "${component}.jsx"
touch "${component}.scss"
touch "${component}.test.jsx"

echo "${green}✔${reset}"