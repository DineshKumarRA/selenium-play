#!/usr/bin/env bash
set -e

echo "Running the script..."

REPIN=1 bazel run @maven//:pin

echo "Script completed."
