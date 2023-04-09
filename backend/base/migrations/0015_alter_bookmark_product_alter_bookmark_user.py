# Generated by Django 4.2 on 2023-04-09 09:31

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('base', '0014_remove_bookmark_isbookmarked'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bookmark',
            name='product',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='product', to='base.product'),
        ),
        migrations.AlterField(
            model_name='bookmark',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='user', to=settings.AUTH_USER_MODEL),
        ),
    ]
