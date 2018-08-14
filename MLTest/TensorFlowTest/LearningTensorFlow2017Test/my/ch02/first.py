import tensorflow as tf

h = tf.constant("Hello")
t = tf.constant(" World")

hw = h + t
with tf.Session() as sess:
    ans = sess.run(hw)

print(ans)

print(hw)