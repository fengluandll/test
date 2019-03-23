Transferring points to other members

Narrative:
In order to allow friends and family to benefit from my Frequent Flyer points
As a Frequent Flyer member
I want to be able to transfer some of my points to other Frequent Flyer members


Scenario: Transfer points between existing members
Given Jane has 100000 points
And Joe has 50000 points
When Joe transfers 40000 to Jane
Then Jane should have 140000 points
And Joe should have 10000 points

Scenario: Transfer points between existing members
Given the following accounts:
  | owner | points | statuspoints  |
  | Jane  | 100000 | 800           |
  | Joe   | 50000  | 50            |
When Joe transfers 40000 points to Jane
Then the accounts should be the following:
  | owner | points | statuspoints   |
  | Jane  | 140000 | 800            |
  | Joe   | 10000  | 50             |


