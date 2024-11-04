#!/usr/bin/env bash
set -e

REPIN=1 bazel run @maven//:pin
