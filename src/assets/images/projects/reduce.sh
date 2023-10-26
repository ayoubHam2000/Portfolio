#!/bin/bash

my_list=("webserver.png" "ft_transcendence.png" "container.jpg" "netpractice.png")

mkdir processed
for item in "${my_list[@]}"; do
  ffmpeg -i test/$item -vf scale=600:-1 "processed/$item"
done
