# Covalent

Covalent offers two main products:

* Unified API: common queries about accounts, transactions and transfers (https://www.covalenthq.com/docs/api/)
* Increment: a interactive environment to create and run SQL queries (https://www.covalenthq.com/platform/#/increment/query/)

The docs of Increment are available at: https://covalenthq.notion.site/Increment-s-Documentation-9630483356894f1486a076b59d17d23e

For example, this Increment query returns the number of weekly active users on VVS:

```sql
SELECT
  YEAR(signed_at) as tx_year,
  WEEK(signed_at) as tx_week,
  uniq(tx_sender) AS active_addresses
        FROM blockchains.all_chains
        WHERE chain_name = 'cronos_mainnet'
        AND tx_recipient = unhex('145863Eb42Cf62847A6Ca784e6416C1682b1b2Ae')
        GROUP BY tx_year, tx_week
        ORDER BY tx_year asc, tx_week asc
```

Note that EVM addresses are provided without the 0x prefix.

