pragma solidity ^0.8.0;
contract devhers{
    struct Customer{
        string uname;
        string datahash;
        // ipfs implementation - use if kyc gets approved the hash value gets updated
        uint rating;
        uint upvotes;
        address bank;
        string password;
    }

    struct Organisation{
        string name;
        address ethAddress;
        uint rating;
        uint KYC_count;
        string regNumber;
    }
    struct Request{

        string uname;
        string datahash;
        // ipfs implementation - use if kyc gets approved the hash value gets updated
        uint rating;
        uint upvotes;
        address bank;
        address bankAddress;
        bool isAllowed;
    }
    //  list of all customers

    Customer[] allCustomers;

    //  list of all Banks/Organisations

    Organisation[] allOrgs;

    Request[] allRequests;

    function ifAllowed(string Uname, address bank) public payable returns(bool){
        for(uint i = 0; i < allRequests.length; ++i) {
            if(stringsEqual()) && allRequests[i].bank == bank && allRequests[i].isAllowed) {
                return true;
            }

        }
        return false;
    }

    

}