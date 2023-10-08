#!/bin/bash
cd terraform
terraform apply -var-file=stg.tfvars -auto-approve