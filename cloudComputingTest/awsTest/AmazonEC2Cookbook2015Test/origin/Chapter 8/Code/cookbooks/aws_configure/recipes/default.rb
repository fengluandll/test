#
# Cookbook Name:: aws_configure
# Recipe:: default
#
# Copyright 2015, YOUR_COMPANY_NAME
#
# All rights reserved - Do Not Redistribute
#
require 'chef/provisioning'

with_machine_options :bootstrap_options => {
  :instance_type => 't1.micro',
  :image_id => 'ami-04b1a46c'
}

machine 'frontendsrv01' do
    run_list ['nginx']
end