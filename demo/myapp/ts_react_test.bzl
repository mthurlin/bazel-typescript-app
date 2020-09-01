load("//demo:ts_test.bzl", "ts_test")

def ts_react_test(name, srcs, deps):
    ts_test(name, srcs, deps + [
            "//demo/myapp:test-setup",
            "@npm//@testing-library/react",
            "@npm//@types/react",
            "@npm//@types/react-dom",
            "@npm//react",
            "@npm//react-dom"
       ]
    )
