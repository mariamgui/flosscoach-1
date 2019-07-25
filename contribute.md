# How to set up a Ruby on Rails development environment

Hi! if you're willing to contribute to  **FLOSScoach** these are the simple setps you must follow to get your local machine ready for development. Tough easy and simple, these steps are estimated to take up to 30min.

## Step 0 - OS
We're focusing here on the Linux operational system (Ubuntu, Mint and other distributions) . Steps may vary in case of MacOS or Windows. 

## Step 1- Rails Dependencies dependencies 
There are some core dependencies that must be installed for the framework *Ruby on Rails* in which *FLOSScoach* is built on top of.

### 1.1 Adding Node.js and Yarn repositories
Running the following command will add NOde.js and Yarn repositories to your machine:
```bash
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

sudo apt-get update
sudo apt-get install git-core curl zlib1g-dev build-essential libssl-dev libreadline-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt1-dev libcurl4-openssl-dev software-properties-common libffi-dev nodejs yarn
```

### 1.2 Installing Ruby through rbenv
rbenv (Ruby virtual environment) is a good, stable and simple way of installing the Ruby programming language interpreter. Here's how to do it:
'''
```bash
git clone https://github.com/rbenv/rbenv.git ~/.rbenv
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
exec $SHELL

git clone https://github.com/rbenv/ruby-build.git ~/.rbenv/plugins/ruby-build
echo 'export PATH="$HOME/.rbenv/plugins/ruby-build/bin:$PATH"' >> ~/.bashrc
exec $SHELL

rbenv install 2.3
rbenv global 2.3
ruby -v
```
Please note that we're installing Ruby version 2.3 

### 1.3 - Installing Bundler 
Bundler is the last dependencie. SImply execute a
```bash
gem install bundler
```
and it's all done.

## Step 2- Configuring Git

Version control is quintessential while contributing to open source projects and working with code in general. Here's how to set your *Git* configurations:
```bash
git config --global color.ui true
git config --global user.name "Insert your name here"
git config --global user.email "yourEmailAdress@here.com"
```
You might want to use the same email as the one used for yout Github/lab account.

## Step 3 - Installing Node.js and Rails
```bash
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
```
```bash
gem install rails -v 5.2.1
```



## Step 4 - Database: Setting up Sqlite3 and Postgre SQL
Installing Postgre SQL can be done with the following commands:
```bash
sudo sh -c "echo 'deb http://apt.postgresql.org/pub/repos/apt/ xenial-pgdg main' > /etc/apt/sources.list.d/pgdg.list"
wget --quiet -O - http://apt.postgresql.org/pub/repos/apt/ACCC4CF8.asc | sudo apt-key add -
sudo apt-get update
sudo apt-get install postgresql-common
sudo apt-get install postgresql-9.5 libpq-dev
```
Lastly, you need to set an user and password so then *FLOSScoach* database setup will be albe to explore and modify the development database
```bash
# python is the username in the development set up.
sudo -u postgres createuser python -s
```
It's important to jnow that the default development password is **python** and you must set it just like this
```bash
# Setting password for the user named python:
sudo -u postgres psql
\password python
# And you will be prompted to type the new password
```
In case you want different user/passoword just be sure to match these with 
the present in the *config/database.yml* file 

## Step 5 - Cloning the FLOSScoach repository
Now that everything is ready, it's time to clone the repository of the project to run your local development server and start contributing
```bash
cd ~
# Cloning the development branchcan be done like so: git clone -b <branch> <remote_repo>
git clone -b development https://github.com/flosscoach/flosscoach.git
#Navigate to the newly created repository clone:
cd flosscoach
```
Some final small adjustments:
```bash
rake db:migrate RAILS_ENV=development
rails server -p 8000
```
Finally done!! See your local server running on [localhost:8000](http://localhost:8000)

## Step 6 - Merging your contributions
After you have finished writting some code these are the steps for adding your contribution to FLOSScoach:

### Step 6.1 - Add changes to GitHub
```bash
#cd to the project directory
cd flossccoach
#Add your local changes (. will add all changes done)
git add .
#Create a new commit
git commit -m "Insert commit message here"
#And then send it to the GitHub repository 
git push origin development
#You will be prompted to insert your GitHub login credentials then
```
### Step 6.2 Merging changes
To merge the changes you've done on development to master branch you can follow the excelent instructions from [GitHub official docs](https://help.github.com/en/articles/creating-a-pull-request-template-for-your-repository).
It's quite simple to be done.


