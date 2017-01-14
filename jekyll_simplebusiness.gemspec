# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "jekyll_simplebusiness"
  spec.version       = "0.1.0"
  spec.authors       = ["Gregory Michael Ball"]
  spec.email         = ["greg.ball.cs@gmail.com"]

  spec.summary       = %q{simple business is a jekyll theme that uses bootstrap to create a clean but effective business page}
  spec.homepage      = "https://github.com/gregorymichaelball/jekyll_simplebusiness"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(assets|_layouts|_includes|_sass|LICENSE|README)}i) }

  spec.add_runtime_dependency "jekyll", "~> 3.3"

  spec.add_development_dependency "bundler", "~> 1.12"
  spec.add_development_dependency "rake", "~> 10.0"
end
