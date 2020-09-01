load("@npm//@bazel/typescript:index.bzl", "ts_library")
load("@npm//@bazel/jasmine:index.bzl", "jasmine_node_test")

def ts_test(name, srcs, deps):
    ts_library(
       name = name + "-lib",
       srcs = srcs,
       deps = ["@npm//@types/jasmine"] + deps
    )

    jasmine_node_test(
       name = name,
       srcs = [":" + name + "-lib"]
    )
