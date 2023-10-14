#!/bin/bash
cd terraform
terraform destroy -var-file=stg.tfvars -auto-approve