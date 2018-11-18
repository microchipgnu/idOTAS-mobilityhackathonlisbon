# [Mercedes-Benz.io] idOTAS - disIOTAllow

## Installation 

Clone this repository and then execute
```
npm i
```


## How to use the app

- Go to the ```/lib``` folder and run ```node fetchRestricted-websocket.js```. 

- Test with ```root=DWQGBF9KHYXDBJGBA9CSLCWDWNUSCCMTPQZXMWVHCFRQAYNUYB9JXPOZVDZLVFENOHKX9AEOYTXBNDQXN``` and ```sidekey=PASSWORD``` on the app inputs(```/app/index.html```).

## How to start a sensor

- Go to the ```/examples``` folder and run ```node sensor-fuel.js [time] [mode]```. 

time: time for loop in seconds 

mode: can be 3 (Public: 1, Private: 2, Restricted: 3)

i.e. (Send data in private mode each 15 seconds)
> node sensor-fuel.js 15 2

## How to read data from a sensor

- Go to the ```/lib``` folder and run ```node fetchRestricted.js [root] [sidekey]```. 

root: works as the message identifier 

sidekey: the key to decrypt the message (when in restrict mode)

i.e. (Fetch data starting on root sequentially)
> node fetchRestricted.js DWQGBF9KHYXDBJGBA9CSLCWDWNUSCCMTPQZXMWVHCFRQAYNUYB9JXPOZVDZLVFENOHKX9AEOYTXBNDQXN PASSWORD

## Technical details

- IOTA is a distributed ledger that is built to power the Machine Economy through fee-less micro-transactions and data integrity.
- MAM (Masked Authenticated Message) is a second layer data communication protocol which adds functionality to emit and access an encrypted data stream (like RSS)
- MAM ```Channel``` is where a user/sensor publishes his message/data. Followers of this channel can view data when published or followed all the channel stream.
- The ```Channel``` can be either publick, private or restricted.