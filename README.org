Tutorial Simple
==================

This app was initialized with [create-near-app] ts-contract

Set up:
nodejs: v16.14.2
npm: 8.5.0
near-cli: 3.4.2
===========

If you haven't installed dependencies during setup:
    cd  ts-contract
    npm install


(Maybe run: npm add buffer)
Next step:
===========

    npm run deploy

Run frontend (If you want):
===========

    npm start

Run frontend:
===========

    npm start   

Test method countTest:

   near view dev-1673444108783-37066139861939 countTest --account-id dev-1673444108783-37066139861939 

Test method tangGiaTri:

   near call dev-1673444108783-37066139861939 tangGiaTri '{"abc": "Aloha"}' --account-id dev-1673444108783-37066139861939 

===========
Delete neardev:

    cd contract  
    rm -rf neardev
    cd ..

and run deploy again     
