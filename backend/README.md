### TARGET_COMPONENTSs

| Column       | Data Type |       Description       |
| ------------ | :-------: | :---------------------: |
| PID          |  STRING   | Protein Id. Primary key |
| accession    |  STRING   |                         |
| description  |  STRING   |                         |
| type         |  STRING   |      protein type       |
| relationship |  STRING   |                         |

### CROSS_REFERENCESs

| Column    | Data Type |       Description       |
| --------- | :-------: | :---------------------: |
| PID       |  STRING   | Protein Id. Primary key |
| xred_id   |  STRING   |                         |
| xref_name |  STRING   |                         |
| xref_src  |  STRING   |      protein type       |

### TARGET_COMPONENT_XREFs

| Column | Data Type |       Description       |
| ------ | :-------: | :---------------------: |
| PID    |  STRING   | Protein Id. Primary key |
| xrefid |  STRING   |                         |
| name   |  STRING   |                         |
| src_db |  STRING   |      protein type       |



### TARGETs

| Column             | Data Type |       Description       |
| ------------------ | :-------: | :---------------------: |
| PID                |  STRING   | Protein Id. Primary key |
| organism           |  STRING   |                         |
| pref_name          |  STRIGN   |                         |
| score              |  INTEGER  |      protein type       |
| target_type        |  STRING   |                         |
| tax_id             |  INTEGER  |                         |
| species_group_flag |  BOOLEAN  |                         |

